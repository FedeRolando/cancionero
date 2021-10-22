$stDown.addEventListener("click",()=>{
	switch(selectedTone){
		/*Major tones*/
		case toneC:
			selectedTone = toneB;
			break;
		case toneDb:
			selectedTone = toneC;
			break;
		case toneD:
			selectedTone = toneDb;
			break;
		case toneEb:
			selectedTone = toneD;
			break;
		case toneE:
			selectedTone = toneEb;
			break;
		case toneF:
			selectedTone = toneE;
			break;
		case toneFs:
			selectedTone = toneF;
			break;
		case toneG:
			selectedTone = toneFs;
			break;
		case toneAb:
			selectedTone = toneG;
			break;
		case toneA:
			selectedTone = toneAb;
			break;
		case toneBb:
			selectedTone = toneA;
			break;
		case toneB:
			selectedTone = toneBb;
			break;
		/*Minor tones*/
		case toneCm:
			selectedTone = toneBm;
			break;
		case toneCsm:
			selectedTone = toneCm;
			break;
		case toneDm:
			selectedTone = toneCsm;
			break;
		case toneDsm:
			selectedTone = toneDm;
			break;
		case toneEm:
			selectedTone = toneDsm;
			break;
		case toneFm:
			selectedTone = toneEm;
			break;
		case toneFsm:
			selectedTone = toneFm;
			break;
		case toneGm:
			selectedTone = toneFsm;
			break;
		case toneGsm:
			selectedTone = toneGm;
			break;
		case toneAm:
			selectedTone = toneGsm;
			break;
		case toneBbm:
			selectedTone = toneAm;
			break;
		case toneBm:
			selectedTone = toneBbm;
			break;
	}
	selectedSong.chords();
	$chords.innerHTML = chords;
	$actualTone.innerText = selectedTone.tone;
});
$stUp.addEventListener("click",()=>{
	switch(selectedTone){
		/*Major tones*/
		case toneC:
			selectedTone = toneDb;
			break;
		case toneDb:
			selectedTone = toneD;
			break;
		case toneD:
			selectedTone = toneEb;
			break;
		case toneEb:
			selectedTone = toneE;
			break;
		case toneE:
			selectedTone = toneF;
			break;
		case toneF:
			selectedTone = toneFs;
			break;
		case toneFs:
			selectedTone = toneG;
			break;
		case toneG:
			selectedTone = toneAb;
			break;
		case toneAb:
			selectedTone = toneA;
			break;
		case toneA:
			selectedTone = toneBb;
			break;
		case toneBb:
			selectedTone = toneB;
			break;
		case toneB:
			selectedTone = toneC;
			break;
		/*Minor tones*/
		case toneCm:
			selectedTone = toneCsm;
			break;
		case toneCsm:
			selectedTone = toneDm;
			break;
		case toneDm:
			selectedTone = toneDsm;
			break;
		case toneDsm:
			selectedTone = toneEm;
			break;
		case toneEm:
			selectedTone = toneFm;
			break;
		case toneFm:
			selectedTone = toneFsm;
			break;
		case toneFsm:
			selectedTone = toneGm;
			break;
		case toneGm:
			selectedTone = toneGsm;
			break;
		case toneGsm:
			selectedTone = toneAm;
			break;
		case toneAm:
			selectedTone = toneBbm;
			break;
		case toneBbm:
			selectedTone = toneBm;
			break;
		case toneBm:
			selectedTone = toneCm;
			break;
	}
	selectedSong.chords();
	$chords.innerHTML = chords;
	$actualTone.innerText = selectedTone.tone;
});
