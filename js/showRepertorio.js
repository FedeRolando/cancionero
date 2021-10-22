function showRepertorio(){
	$header.classList.add("d-none");
	$main.classList.add("d-none");
	$songs.innerHTML = "";
	let fragment = d.createDocumentFragment();
	for(let i of canciones){
		let song = d.createElement("a");
		song.innerHTML = `${i.title} - ${i.autor}`;
		song.addEventListener("click",()=>{
			selectedSong = i;
			selectedSong.tone();
			selectedSong.chords();
			$chords.innerHTML = chords;
			$songName.innerText = selectedSong.title; 
			$autor.innerText = selectedSong.autor;
			$originalTone.innerText = selectedSong.originalTone;
			$favoriteTone.innerText =  selectedSong.favoriteTone;
			$actualTone.innerText = selectedTone.tone;
			$header.classList.remove("d-none");
			$main.classList.remove("d-none");
			$songs.classList.add("d-none");
		})
		fragment.appendChild(song);
	}
	$songs.appendChild(fragment);
	$songs.classList.remove("d-none");
}
