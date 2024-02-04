/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

const sortNumbers = (a: number, b: number) => a < b ? -1 : a === b ? 0 : 1;

/**
 * given a chord starting on note 0, e.g. C major, return all the other similar
 * chords, e.g. C# major, D major...B major.
 */
function chordToChords(chord: number[]) {
  const zeroToEleven = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return zeroToEleven
    .map((offset) => new Set(
      chord
        .map((note) => note + offset)
      )
    );
}
const majorChords = chordToChords([0, 4, 3]);

export function notesToChord(notes: number[]) {
  if (notes.length < 2) return '';

  const sortedNotes = notes.toSorted(sortNumbers);
  const bassNote = sortedNotes[0];
  // const zeroBasedNotes = sortedNotes.map((n) => n - bassNote);
  const oneOctaveNotes = new Set(sortedNotes.map((n) => n % 12).toSorted(sortNumbers));
  majorChords.filter((c) => c.isSubsetOf(oneOctaveNotes));
}

function listenOnAllInputs(midiAccess: MIDIAccess, eventHandler: ((this: MIDIInput, ev: Event) => void)): void {
  for (const [key, value] of midiAccess.inputs) {
    console.log('listening on ', key, value);
    value.onmidimessage = eventHandler;
  }
}

function sendMiddleC(midiAccess: MIDIAccess, output: MIDIOutput, note = 60) {
  const noteOnMessage = [0x90, note, 75]; // note on middle C, full velocity
  if (output) {
    console.log('sending', noteOnMessage);
    output.send(noteOnMessage); //omitting the timestamp means send immediately.
    output.send([0x80, note, 0x40], window.performance.now() + 2000.0); // timestamp = now + 1000ms.
  } else {
    console.warn('could not find ', output);
  }
}

const screenInfo = {
  backgroundColor: '#84847a',
  litColor: '#464c4a',
  unlitColor: '#76817d',
  width: '300px',
  height: '150px',
};
@customElement('lcd-screen')
export class LcdScreen extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 300px;
      height: 150px;
      background-color: #84847a;
      background-image: url(lcd-background.png);
      background-repeat: repeat;
    }
    .lit-tile {
      background-image: url(lcd-lit-tile.png);
    }
    .unlit-tile {
      background-image: url(lcd-unlit-tile.png);
    }
  `;

  override render() {
    return html`
      <div class="lit-tile" style="width: 10px; height: 10px">
      </div>
      <div class="unlit-tile" style="width: 10px; height: 10px">
      </div>
    `;
  }
}

@customElement('test-notes')
export class TestNotes extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      border: solid 1px red;
      box-sizing: border-box;
    }
  `;
  override render() {
    const size = 10;
    const strokeWidth = 1;
    const height = size*2 + strokeWidth * 2;
    const width = height;
    return html`
      <svg width=${width} height=${height}>
        <circle fill="none" strokeWidth=${strokeWidth} stroke="black" cx="${size + strokeWidth}" cy="${size + strokeWidth}" r="${size}" />
      </svg>
    `;
  }
}

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
      }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;
  midiAccess?: MIDIAccess;
  output: MIDIOutput;
  note = 60;


  public override connectedCallback(): void {
    super.connectedCallback();
    if ((navigator as Partial<typeof navigator>).requestMIDIAccess) {
      console.log('Browser supports MIDI!');
      navigator.requestMIDIAccess({ sysex: true })
        .then((midiAccess) => {
          console.log('midi request success!');
          this.midiAccess = midiAccess;

          console.log(midiAccess);
          listenOnAllInputs(midiAccess, this.onMidiMessage);
          this.output = Array.from(midiAccess.outputs.values())[0];
          window.midiOutput = this.output;
          (midiAccess.onstatechange as (this: MIDIAccess, ev: MIDIConnectionEvent) => void) = (event: MIDIConnectionEvent) => {
            // Print information about the (dis)connected MIDI controller
            console.log(event.port.name, event.port.manufacturer, event.port.state);
            listenOnAllInputs(midiAccess, this.onMidiMessage);
          };
        })
        .catch((e) => {
          console.log('midi request failed!', e);
        })
    }
  }
  public override disconnectedCallback(): void {
    super.disconnectedCallback();

  }
  
  private onMidiMessage = (e: Event & { data: any}) => {
    console.log(e);
    const data = Array.from(e.data);
    console.log(data);
  }

  override render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <test-notes></test-notes>
      <lcd-screen></lcd-screen>
      <input type="range" min="0" max="16383" step="1" value="8192" orient="vertical" @input=${this._onPitchBendChange} />
      <input id="note" type="number" min="0" max="127" step="1" value="60" @input=${this._onNoteChange}/>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>

      <input id="programChange" type="number" min="0" max="127" step="1" value="0"/>
      <button @click=${this._onProgramChange} part="button">
        Tone
      </button>
      <slot></slot>
    `;
  }

  private _onPitchBendChange(e: Event) {
    this.pitchBend = Number.parseInt(e.currentTarget.value);
    const msg = [0xe0, this.pitchBend & 0x7F, (this.pitchBend >> 7) & 0x7F];
    console.log('sending:', msg);
    this.output.send(msg);
  }
  private _onProgramChange(e: Event) {
    this.tone = Number.parseInt(e.currentTarget.getRootNode().querySelector('#programChange').value);
    const msg = [0xc0, this.tone];
    console.log('sending:', msg);
    this.output.send(msg);
  }
  private _onNoteChange(e: Event) {
    this.note = Number.parseInt(e.currentTarget.value);
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
    if (this.midiAccess) {
      sendMiddleC(this.midiAccess, this.output, this.note);
    }
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
