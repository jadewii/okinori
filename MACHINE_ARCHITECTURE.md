# JAMNUTZ MACHINE ARCHITECTURE

## Overview
JAMNUTZ is a collection of music-making machines that share a common modular architecture. Each machine shares the same left panel controls but has unique sequencing/composition interfaces on the right.

---

## SHARED COMPONENTS (All Machines)

### Left Panel - Sound Design & Control
**Always present across all machines:**

1. **Track Buttons (Top)**
   - 4 track buttons with waveform icons
   - Color-coded (Track 1: Red, Track 2: Blue, Track 3: Orange, Track 4: Purple)
   - Click to switch between tracks

2. **Pattern Grid (10 slots)**
   - Save/load patterns (1-10)
   - DUP button (copy patterns)
   - X button (delete patterns)
   - Grid/Keys toggle button

3. **Preset Grid (10 slots per track)**
   - Save/load sound presets
   - Per-track preset storage
   - Visual indicators for filled slots

4. **Sound Design Panels**
   - SOUND panel (waveform, detune, octave, pan)
   - FILTER panel (cutoff, resonance, drive, type)
   - ADSR panel (attack, decay, sustain, release)
   - FX panel (delay, reverb, glitch)
   - Each panel has randomize dice button

5. **Music Keyboard**
   - Chromatic keyboard for live playing
   - Octave controls
   - Scale selector dropdown
   - Records to current track

### Top Bar - Transport & Global Controls
**Consistent across machines:**
- Back button (← to apps menu)
- App name (OKINORI, CHIPBOI, etc.)
- PLAY button
- GEN button (generative mode, per-track)
- STP button (step record mode)
- X button (clear)
- BPM slider (60-200)
- Scale dropdown
- Track buttons (duplicated for quick access)
- EDIT button (opens left panel)
- Theme selector

---

## MACHINE 1: OKINORI
**Status:** ✅ Complete
**Identity:** Generative/experimental polyphonic sequencer
**Use Case:** Ambient, experimental, IDM, live improvisation, happy accidents

### Unique Features (Right Panel)

#### 12-Row Polyphonic Grid
- 384 steps (12 rows × 32 columns)
- Each row = different note in scale
- Polyphonic (chords happen naturally)
- Color-coded octave values (darker = lower, lighter = higher)
- Click to add/remove notes
- Click-drag to add multiple notes

#### Sequencer Modes
1. **GRID Mode** (default)
   - Standard note editing
   - Click to toggle notes on/off

2. **TRIG Mode** (Elektron-style retriggering)
   - Click to cycle retrigger values (1→2→3→4)
   - Numbers displayed on active steps
   - Creates glitchy/stuttering effects
   - 32nd note subdivisions (25ms gate)

3. **PROB Mode** (Probability/Chance)
   - Click to cycle probability (100%→25%→50%→75%→100%)
   - Water-bottle fill visualization (vertical fill from bottom)
   - Each step has random chance to play
   - Two visual styles: smooth gradient vs hard cut

#### Randomization System
**Dice Button (RND)**
- Press once to enter randomize mode
- EDIT changes to "SOUND"
- GRID/TRIG/PROB/SOUND get dashed outlines
- Buttons stay lit and pulsing

**While in Dice Mode:**
- **SOUND** → Randomizes ALL sound parameters (SOUND + FILTER + ADSR + FX)
- **GRID** → Randomizes note pattern (controlled by density buttons)
- **TRIG** → Randomizes retrigger values (1-4)
- **PROB** → Randomizes probability values (25/50/75/100)
- Press dice again to exit mode

**Reset Button (RST)**
- Same workflow as dice, but resets to defaults instead of randomizing
- **SOUND** → Resets to neutral (sine wave, basic ADSR, no FX)
- **GRID** → Clears all notes
- **TRIG** → Resets all retrigs to 1
- **PROB** → Resets all probabilities to 100%

**Density Control (3 Buttons)**
- Stacked vertically next to dice button
- Controls how many steps are added when randomizing GRID
- 1 button lit = SPARSE (5-10% fill, ~20-40 steps)
- 2 buttons lit = MEDIUM (15-25% fill, ~60-100 steps)
- 3 buttons lit = DENSE/CHAOTIC (30-40% fill, ~115-155 steps)
- All patterns are MONO (same octave value for all notes)

**Generative Mode (GEN)**
- Per-track toggle
- Lights up in track color when active
- Generates initial pattern immediately
- Auto-regenerates new pattern at end of each loop
- Infinite evolving music - no two loops are the same

#### Marketing Angle
> "OKINORI: A generative sequencer that thinks for you. Press dice, get instant experimental patterns. Probability keeps it evolving. Retriggering adds glitch. No two plays are the same. Control the chaos with density knobs - dial from minimal techno to full experimental noise."

**Core Philosophy:**
- Controlled randomness that stays musical
- Happy accidents as a feature
- Generative/algorithmic composition
- Experimental sound design depth
- NOT a basic chiptune maker - this is for creating evolving textures

---

## MACHINE 2: CHIPBOI
**Status:** 🔨 Next to build
**Identity:** Precise mono chiptune tracker for retro game music
**Use Case:** Gameboy-style OSTs, precise melodic composition, 8-bit nostalgia

### Unique Features (Right Panel)

#### Unified 4-Track Grid
- Shows all 4 tracks at once (4 rows × 32 columns)
- Mono only (one note per step per track)
- Simple on/off (no octave variations like OKINORI)
- Quick rhythm programming across all tracks
- Color-coded per track

#### Traditional Tracker Interface
- Vertical scrolling pattern editor
- Hex notation for notes (C-4, D#5, etc.)
- FX commands (0xy = arpeggio, 1xy = slide, etc.)
- Step-by-step manual composition
- Classic tracker workflow (like Famitracker/LSDJ)

#### Relationship Between Grid & Tracker
- **Grid** = Quick sketch area for rhythm/structure
- **Tracker** = Detailed melody/FX editor
- Grid outputs to tracker (converts clicks to tracker rows)
- Tracker can override grid (precise control)
- Both edit the same underlying pattern data

#### Sound Constraints (Pure Chiptune)
- **Raw waveforms only:**
  - 2 Pulse channels (variable duty cycle: 12.5%, 25%, 50%, 75%)
  - 1 Wave channel (custom waveform)
  - 1 Noise channel (white/periodic noise)
- **No fancy filters** - just volume envelopes
- **Classic effects:**
  - Arpeggio (fast note cycling for "chords")
  - Vibrato (pitch wobble)
  - Volume sweep
  - Pitch bend

#### Key Differences from OKINORI
| Feature | OKINORI | CHIPBOI |
|---------|---------|---------|
| **Polyphony** | Polyphonic (chords) | Mono (one note at a time) |
| **Grid** | 12 rows × 32 steps (384) | 4 rows × 32 steps (128) |
| **Workflow** | Generative/random | Manual/composed |
| **Sound** | Experimental (filters/FX) | Pure retro waves |
| **Identity** | "Create instant vibes" | "Compose exact melodies" |
| **Interface** | Grid only | Grid + Tracker |
| **Randomization** | Heavy (GEN/dice/density) | Minimal (if any) |

---

## SHARED INFRASTRUCTURE

### Pattern System
- 10 pattern slots (consistent across machines)
- Pattern contains: notes, sound settings, FX settings
- DUP/Clear modes work the same way

### Preset System
- 10 preset slots per track (consistent across machines)
- Saves: waveform, ADSR, filter, FX settings
- Quick recall of favorite sounds

### File Structure
```
/apps/
  /okinori/
    - index.html (parent window - UI shell)
    - app.html (iframe - audio engine)
  /chipboi/
    - index.html (parent window - UI shell)
    - app.html (iframe - audio engine)
```

### Code Sharing Strategy
- Left panel components can be extracted into reusable modules
- Audio engine (Web Audio API) shared across machines
- Pattern/preset save/load logic shared
- Each machine only customizes right panel (sequencer area)

---

## FUTURE MACHINES (Ideas)

### Machine 3: BEATBOX (Drum Machine)
- TR-808/909 style interface
- 16-pad grid per instrument
- Dedicated drum sounds (kick, snare, hat, etc.)
- Swing control
- Per-step velocity

### Machine 4: EUCLID (Euclidean Sequencer)
- Circular/radial interface
- Euclidean rhythm generator
- Polyrhythmic patterns
- CV-style modulation

### Machine 5: PATCHWERK (Modular Synth)
- Visual patching interface
- Oscillators → Filters → Envelopes → Effects
- Node-based routing
- Experimental sound design

---

## DEVELOPMENT ROADMAP

### Phase 1: OKINORI ✅
- [x] Polyphonic grid
- [x] TRIG mode
- [x] PROB mode
- [x] Dice/RST randomization system
- [x] Density control
- [x] GEN auto-regeneration
- [x] EDIT/SOUND toggle
- [x] Icon consistency

### Phase 2: CHIPBOI 🔨
- [ ] Extract shared left panel components
- [ ] Build unified 4-track grid
- [ ] Implement tracker interface
- [ ] Add pure chiptune waveforms
- [ ] Link grid ↔ tracker
- [ ] Classic tracker FX commands
- [ ] Mono-only enforcement

### Phase 3: Polish & Launch
- [ ] Performance optimization
- [ ] Mobile responsive design
- [ ] Export/save functionality
- [ ] Documentation/tutorials
- [ ] Marketing materials

---

## TECHNICAL NOTES

### Audio Architecture
- Web Audio API for synthesis
- Per-track audio chain: Oscillator → Filter → Gain (ADSR) → FX → Master
- 120 BPM default, 60-200 range
- 32-step patterns (expandable to 384 for OKINORI)

### State Management
- Pattern data stored in sequencer.sequencerTracks (per instrument)
- Settings stored in localStorage (persists between sessions)
- Presets stored per-track in presetSlots object
- Generative mode state tracked per-track

### Performance Considerations
- Grid rendering optimized with createGrid() caching
- Audio scheduled ahead with lookahead buffer
- Visual updates debounced to 60fps max

---

## DESIGN PRINCIPLES

1. **Consistency** - Left panel always the same
2. **Modularity** - Right panel swaps per machine
3. **Identity** - Each machine has clear purpose
4. **No Overlap** - Machines complement, don't compete
5. **Shared DNA** - Same keyboard/controls/patterns
6. **Different Souls** - Unique sequencing approach

---

*Last updated: 2026-04-06*
