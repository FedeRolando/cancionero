const naturalNotes = ["C","D","E","F","G","A","B"],
bemolNotes = ["Db","Eb","Gb","Ab","Bb"],
sharpNotes = ["C#","D#","F#","G#","A#"];

class MajorTone {
	constructor(tone,_1st,_2nd,_3rd,_4th,_5th,_6th,_7th_b,_7th){
		this.tone = tone;
		this._1st = _1st;
		this._2nd_m = _2nd+"m";
		this._2nd = _2nd;
		this._3rd_m = _3rd+"m";
		this._3rd = _3rd;
		this._4th = _4th;
		this._5th = _5th;
		this._6th_m = _6th+"m";
		this._7th_b = _7th_b;
		this._7th_dis = _7th+"º";
	}
}

const toneC = new MajorTone("C",naturalNotes[0],naturalNotes[1],naturalNotes[2],naturalNotes[3],naturalNotes[4],naturalNotes[5],bemolNotes[4],naturalNotes[6]),
toneDb = new MajorTone("Db",bemolNotes[0],bemolNotes[1],naturalNotes[3],bemolNotes[2],bemolNotes[3],bemolNotes[4],naturalNotes[6],naturalNotes[0]),
toneD = new MajorTone("D",naturalNotes[1],naturalNotes[2],sharpNotes[2],naturalNotes[4],naturalNotes[5],naturalNotes[6],naturalNotes[0],sharpNotes[0]),
toneEb = new MajorTone("Eb",bemolNotes[1],naturalNotes[3],naturalNotes[4],bemolNotes[3],bemolNotes[4],naturalNotes[0],bemolNotes[0],naturalNotes[1]),
toneE =  new MajorTone("E",naturalNotes[2],sharpNotes[2],sharpNotes[3],naturalNotes[5],naturalNotes[6],sharpNotes[0],naturalNotes[1],sharpNotes[1]),
toneF = new MajorTone("F",naturalNotes[3],naturalNotes[4],naturalNotes[5],bemolNotes[4],naturalNotes[0],naturalNotes[1],bemolNotes[1],naturalNotes[2]),
toneFs =  new MajorTone("F#",sharpNotes[2],sharpNotes[3],sharpNotes[4],naturalNotes[6],sharpNotes[0],sharpNotes[1],naturalNotes[2],naturalNotes[3]),
toneG =  new MajorTone("G",naturalNotes[4],naturalNotes[5],naturalNotes[6],naturalNotes[0],naturalNotes[1],naturalNotes[2],naturalNotes[3],sharpNotes[2]),
toneAb = new MajorTone("Ab",bemolNotes[3],bemolNotes[4],naturalNotes[0],bemolNotes[0],bemolNotes[1],naturalNotes[3],bemolNotes[2],naturalNotes[4]),
toneA =  new MajorTone("A",naturalNotes[5],naturalNotes[6],sharpNotes[0],naturalNotes[1],naturalNotes[2],sharpNotes[2],naturalNotes[4],sharpNotes[3]),
toneBb =  new MajorTone("Bb",bemolNotes[4],naturalNotes[0],naturalNotes[1],bemolNotes[1],naturalNotes[3],naturalNotes[4],bemolNotes[3],naturalNotes[5]),
toneB =  new MajorTone("B",naturalNotes[6],sharpNotes[0],sharpNotes[1],naturalNotes[2],sharpNotes[2],sharpNotes[3],naturalNotes[5],sharpNotes[4]);

class MinorTone {
	constructor(tone,_1st,_2nd,_3rd,_4th,_5th,_6th,_7th){
		this.tone = tone;
		this._1st_m = _1st+"m";
		this._2nd_dis = _2nd+"º";
		this._3rd = _3rd;
		this._4th_m = _4th+"m";
		this._5th = _5th;
		this._5th_m = _5th+"m";
		this._6th = _6th;
		this._7th = _7th;
	}
}

const toneCm =  new MinorTone("Cm",naturalNotes[0],naturalNotes[1],bemolNotes[1],naturalNotes[3],naturalNotes[4],bemolNotes[3],bemolNotes[4]),
toneCsm = new MinorTone("C#m",sharpNotes[0],sharpNotes[1],naturalNotes[2],sharpNotes[2],sharpNotes[3],naturalNotes[5],naturalNotes[6]),
toneDm = new MinorTone("Dm",naturalNotes[1],naturalNotes[2],naturalNotes[3],naturalNotes[4],naturalNotes[5],bemolNotes[4],naturalNotes[0]),
toneDsm = new MinorTone("D#m",sharpNotes[1],naturalNotes[3],sharpNotes[2],sharpNotes[3],sharpNotes[4],naturalNotes[6],sharpNotes[0]),
toneEm = new MinorTone("Em",naturalNotes[2],sharpNotes[2],naturalNotes[4],naturalNotes[5],naturalNotes[6],naturalNotes[0],naturalNotes[1]),
toneFm = new MinorTone("Fm",naturalNotes[3],naturalNotes[4],bemolNotes[3],bemolNotes[4],naturalNotes[0],bemolNotes[0],bemolNotes[1]),
toneFsm = new MinorTone("F#m",sharpNotes[2],sharpNotes[3],naturalNotes[5],naturalNotes[6],sharpNotes[0],naturalNotes[1],naturalNotes[2]),
toneGm = new MinorTone("Gm",naturalNotes[4],naturalNotes[5],bemolNotes[4],naturalNotes[0],naturalNotes[1],bemolNotes[1],naturalNotes[3]),
toneGsm =  new MinorTone("G#m",sharpNotes[3],sharpNotes[4],naturalNotes[6],sharpNotes[0],sharpNotes[1],naturalNotes[2],sharpNotes[2]),
toneAm = new MinorTone("Am",naturalNotes[5],naturalNotes[6],naturalNotes[0],naturalNotes[1],naturalNotes[2],naturalNotes[3],naturalNotes[4]),
toneBbm = new MinorTone("Bbm",bemolNotes[4],naturalNotes[0],bemolNotes[0],bemolNotes[1],naturalNotes[3],bemolNotes[2],bemolNotes[3]),
toneBm = new MinorTone("Bm",naturalNotes[6],sharpNotes[0],naturalNotes[1],naturalNotes[2],sharpNotes[2],naturalNotes[4],naturalNotes[5]);