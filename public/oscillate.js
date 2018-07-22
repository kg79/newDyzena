const atx = new AudioContext();

let name0,name1,name2,name3,name4,name5,name6,name7,name8,
name9,name10,name11,name12,name13,name14,name15,name16,
name17,name18,name19,name20,name21,name22,name23,name24,
name25,name26,name27,name28,name29,name30,name31,name32,
name33,name34,name35,name36,name37,name38,name39;

let volume0,volume1,volume2,volume3,volume4,volume5,volume6,volume7,volume8,volume9,volume10,
volume11,volume12,volume13,volume14,volume15,volume16,volume17,volume18,volume19,volume20,
volume21,volume22,volume23,volume24,volume25,volume26,volume27,volume28,volume29,volume30,
volume31,volume32,volume33,volume34,volume35,volume36,volume37,volume38,volume39;

let keyCodes = [
    {symbol:'1', number:49},
    {symbol:'2', number:50},
    {symbol:'3', number:51},
    {symbol:'4', number:52},
    {symbol:'5', number:53},
    {symbol:'6', number:54},
    {symbol:'7', number:55},
    {symbol:'8', number:56},
    {symbol:'9', number:57},
    {symbol:'0', number:48},
    {symbol:'Q', number:81},
    {symbol:'W', number:87},
    {symbol:'E', number:69},
    {symbol:'R', number:82},
    {symbol:'T', number:84},
    {symbol:'Y', number:89},
    {symbol:'U', number:85},
    {symbol:'I', number:73},
    {symbol:'O', number:79},
    {symbol:'P', number:80},
    {symbol:'A', number:65},
    {symbol:'S', number:83},
    {symbol:'D', number:68},
    {symbol:'F', number:70},
    {symbol:'G', number:71},
    {symbol:'H', number:72},
    {symbol:'J', number:74},
    {symbol:'K', number:75},
    {symbol:'L', number:76},
    {symbol:';', number:186},
    {symbol:'Z', number:90},
    {symbol:'X', number:88},
    {symbol:'C', number:67},
    {symbol:'V', number:86},
    {symbol:'B', number:66},
    {symbol:'N', number:78},
    {symbol:'M', number:77},
    {symbol:'<', number:188},
    {symbol:'>', number:190},
    {symbol:'/', number:191}
];

function Oscillator (name, volume, index, playing){
    this.name = name;
    this.volume = volume;
    this.index = index;
      this.playing = false;
  }
    Oscillator.prototype.on = function() {
      if (this.playing === false) {
        this.name = atx.createOscillator();
        this.volume = atx.createGain();
        this.volume.gain.value = 0.3;
        this.name.frequency.value = list.root* gui.scale[this.index].dec;
        this.name.connect(this.volume).connect(atx.destination);
        this.name.start(0);
          this.playing = true;

          if(this.index === selected) {
            tile[this.index].style.border = 'purple solid 2px';
          } else {
            tile[this.index].style.border = 'red solid 2px';
          }
      }
    }
  
    Oscillator.prototype.off = function() {
      this.name.stop(0);
        this.playing = false;

        if (this.index === selected) {
          tile[this.index].style.border = 'blue solid 2px';
        } else {
          tile[this.index].style.border = 'white solid 2px';
        }
    }
    
    const notes = [
        new Oscillator(name0,  volume0,  0),
        new Oscillator(name1,  volume1,  1),
        new Oscillator(name2,  volume2,  2),
        new Oscillator(name3,  volume3,  3),
        new Oscillator(name4,  volume4,  4),
        new Oscillator(name5,  volume5,  5),
        new Oscillator(name6,  volume6,  6),
        new Oscillator(name7,  volume7,  7),
        new Oscillator(name8,  volume8,  8),
        new Oscillator(name9,  volume9,  9),
        new Oscillator(name10,  volume10, 10),
        new Oscillator(name11,  volume11, 11),
        new Oscillator(name12,  volume12, 12),
        new Oscillator(name13,  volume13, 13),
        new Oscillator(name14,  volume14, 14),
        new Oscillator(name15,  volume15, 15),
        new Oscillator(name16,  volume16, 16),
        new Oscillator(name17,  volume17, 17),
        new Oscillator(name18,  volume18, 18),
        new Oscillator(name19,  volume19, 19),
        new Oscillator(name20,  volume20, 20),
        new Oscillator(name21,  volume21, 21),
        new Oscillator(name22,  volume22, 22),
        new Oscillator(name23,  volume23, 23),
        new Oscillator(name24,  volume24, 24),
        new Oscillator(name25,  volume25, 25),
        new Oscillator(name26,  volume26, 26),
        new Oscillator(name27,  volume27, 27),
        new Oscillator(name28,  volume28, 28),
        new Oscillator(name29,  volume29, 29),
        new Oscillator(name30,  volume30, 30),
        new Oscillator(name31,  volume31, 31),
        new Oscillator(name32,  volume32, 32),
        new Oscillator(name33,  volume33, 33),
        new Oscillator(name34,  volume34, 34),
        new Oscillator(name35,  volume35, 35),
        new Oscillator(name36,  volume36, 36),
        new Oscillator(name37,  volume37, 37),
        new Oscillator(name38,  volume38, 38),
        new Oscillator(name39,  volume39, 39),
      ];

      window.onkeydown = e => {
        switch (e.keyCode) {
          
          case keyCodes[0].number:
          notes[0].on();
          break;

          case keyCodes[1].number:
          notes[1].on();
          break;

          case keyCodes[2].number:
          notes[2].on();
          break;

          case keyCodes[3].number:
          notes[3].on();
          break;

          case keyCodes[4].number:
          notes[4].on();
          break;

          case keyCodes[5].number:
          notes[5].on();
          break;

          case keyCodes[6].number:
          notes[6].on();
          break;

          case keyCodes[7].number:
          notes[7].on();
          break;

          case keyCodes[8].number:
          notes[8].on();
          break;

          case keyCodes[9].number:
          notes[9].on();
          break;

          case keyCodes[10].number:
          notes[10].on();
          break;
          
          case keyCodes[11].number:
          notes[11].on();
          break;
          
          case keyCodes[12].number:
          notes[12].on();
          break;
          
          case keyCodes[13].number:
          notes[13].on();
          break;
          
          case keyCodes[14].number:
          notes[14].on();
          break;
          
          case keyCodes[15].number:
          notes[15].on();
          break;
          
          case keyCodes[16].number:
          notes[16].on();
          break;
          
          case keyCodes[17].number:
          notes[17].on();
          break;
          
          case keyCodes[18].number:
          notes[18].on();
          break;
          
          case keyCodes[19].number:
          notes[19].on();
          break;
          
          case keyCodes[20].number:
          notes[20].on();
          break;
          
          case keyCodes[21].number:
          notes[21].on();
          break;
          
          case keyCodes[22].number:
          notes[22].on();
          break;
          
          case keyCodes[23].number:
          notes[23].on();
          break;
          
          case keyCodes[24].number:
          notes[24].on();
          break;
          
          case keyCodes[25].number:
          notes[25].on();
          break;
          
          case keyCodes[26].number:
          notes[26].on();
          break;
          
          case keyCodes[27].number:
          notes[27].on();
          break;
          
          case keyCodes[28].number:
          notes[28].on();
          break;
          
          case keyCodes[29].number:
          notes[29].on();
          break;
          
          case keyCodes[30].number:
          notes[30].on();
          break;
          
          case keyCodes[31].number:
          notes[31].on();
          break;
          
          case keyCodes[32].number:
          notes[32].on();
          break;
          
          case keyCodes[33].number:
          notes[33].on();
          break;
          
          case keyCodes[34].number:
          notes[34].on();
          break;
          
          case keyCodes[35].number:
          notes[35].on();
          break;
          
          case keyCodes[36].number:
          notes[36].on();
          break;
          
          case keyCodes[37].number:
          notes[37].on();
          break;
          
          case keyCodes[38].number:
          notes[38].on();
          break;

          case keyCodes[39].number:
          notes[39].on();
          break;

        }
      }
        window.onkeyup = e => {
          switch (e.keyCode) {

            case keyCodes[0].number:
            notes[0].off();
            break;
          
            case keyCodes[1].number:
            notes[1].off();
            break;
          
            case keyCodes[2].number:
            notes[2].off();
            break;
          
            case keyCodes[3].number:
            notes[3].off();
            break;
          
            case keyCodes[4].number:
            notes[4].off();
            break;
          
            case keyCodes[5].number:
            notes[5].off();
            break;
          
            case keyCodes[6].number:
            notes[6].off();
            break;
          
            case keyCodes[7].number:
            notes[7].off();
            break;
          
            case keyCodes[8].number:
            notes[8].off();
            break;
          
            case keyCodes[9].number:
            notes[9].off();
            break;
          
            case keyCodes[10].number:
            notes[10].off();
            break;
          
            case keyCodes[11].number:
            notes[11].off();
            break;
          
            case keyCodes[12].number:
            notes[12].off();
            break;
          
            case keyCodes[13].number:
            notes[13].off();
            break;
          
            case keyCodes[14].number:
            notes[14].off();
            break;
          
            case keyCodes[15].number:
            notes[15].off();
            break;
          
            case keyCodes[16].number:
            notes[16].off();
            break;
          
            case keyCodes[17].number:
            notes[17].off();
            break;
          
            case keyCodes[18].number:
            notes[18].off();
            break;
          
            case keyCodes[19].number:
            notes[19].off();
            break;
          
            case keyCodes[20].number:
            notes[20].off();
            break;
          
            case keyCodes[21].number:
            notes[21].off();
            break;
          
            case keyCodes[22].number:
            notes[22].off();
            break;
          
            case keyCodes[23].number:
            notes[23].off();
            break;
          
            case keyCodes[24].number:
            notes[24].off();
            break;
          
            case keyCodes[25].number:
            notes[25].off();
            break;
          
            case keyCodes[26].number:
            notes[26].off();
            break;
          
            case keyCodes[27].number:
            notes[27].off();
            break;
          
            case keyCodes[28].number:
            notes[28].off();
            break;
          
            case keyCodes[29].number:
            notes[29].off();
            break;
          
            case keyCodes[30].number:
            notes[30].off();
            break;
          
            case keyCodes[31].number:
            notes[31].off();
            break;
          
            case keyCodes[32].number:
            notes[32].off();
            break;
          
            case keyCodes[33].number:
            notes[33].off();
            break;
          
            case keyCodes[34].number:
            notes[34].off();
            break;
          
            case keyCodes[35].number:
            notes[35].off();
            break;
          
            case keyCodes[36].number:
            notes[36].off();
            break;
          
            case keyCodes[37].number:
            notes[37].off();
            break;
          
            case keyCodes[38].number:
            notes[38].off();
            break;

            case keyCodes[39].number:
            notes[39].off();
            break;
          }
        }
        
      
      