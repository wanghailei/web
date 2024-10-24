document.addEventListener('DOMContentLoaded', function () {
	const main = document.querySelector('.main');
	const plate = document.querySelector('.plate');
	const leftBtn = document.querySelector('.left-btn');
	const rightBtn = document.querySelector('.right-btn');
	const boardHead = plate.querySelector('.board-head');
	const boards = plate.querySelectorAll('.board');
	
	if (!main || !plate || !leftBtn || !rightBtn || !boardHead || !boards.length) {
		console.error("One or more elements were not found");
		return;
	}
	
	// Calculate the width of one board plus the gap
	const boardWidth = boards[0].offsetWidth;
	const gap = 10; // The gap between boards as defined in CSS
	
	// Calculate the number of full boards that can fit in the viewport minus the board-head
	const viewportWidth = window.innerWidth;
	const boardHeadWidth = boardHead.offsetWidth;
	const visibleBoardWidth = viewportWidth - boardHeadWidth;
	
	// Calculate the scroll amount to the next board
	const boardsInView = Math.floor(visibleBoardWidth / (boardWidth + gap));
	const scrollAmount = boardsInView * (boardWidth + gap);
	
	// Set the additional width to the .plate
	const extraWidth = main.offsetWidth - boardWidth;
	plate.style.width = `${plate.scrollWidth + extraWidth}px`;
	
	leftBtn.addEventListener('click', function () {
		console.log('Left button clicked');
		main.scrollBy({
			left: -scrollAmount,
			behavior: 'smooth'
		});
	});
	
	rightBtn.addEventListener('click', function () {
		console.log('Right button clicked');
		main.scrollBy({
			left: scrollAmount,
			behavior: 'smooth'
		});
	});
});
