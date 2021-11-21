const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

const allCard = Array.from(document.querySelectorAll('.card'));
		const container = document.querySelector('.card-wrapper');
		const indicator = document.querySelector('.indicator');

		const arrHeight = allCard.map(item=> {
			return item.offsetHeight
		})
		const maxHeight = Math.max(...arrHeight);

		allCard.forEach((item, idx)=> {
			item.style.height = maxHeight + 'px';
			item.id = 'card-' + idx;

			const a = document.createElement('a');
			a.href = '#' + item.id
			indicator.appendChild(a);
		})

		container.style.maxHeight = maxHeight + 'px';

		const allIndicator = document.querySelectorAll('.indicator a');

		allIndicator[0].classList.add('active');

		allIndicator.forEach(item=> {
			item.addEventListener('click', function () {
				allIndicator.forEach(i=> {
					i.classList.remove('active');
				})
				item.classList.add('active');
			})
		})

		container.addEventListener('scroll', function () {
			let linkActive;
			allCard.forEach(item=> {
				if(this.scrollTop >= item.offsetTop - (item.offsetHeight / 2) - 28 && this.scrollTop <= (item.offsetTop + (item.offsetHeight / 2) - 28)) {
					linkActive = item.id
				}
			})
			allIndicator.forEach(item=> {
				if(item.getAttribute('href') === ("#" + linkActive)) {
					item.classList.add('active');
				} else {
					item.classList.remove('active');
				}
			})
		})

		