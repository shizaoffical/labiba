


$(document).ready(function () {
	//  For Navbar Toggler Btn

	$(".navbar-toggler").click(function () {
		$(this).toggleClass("open")
	})
	//  Hero Secrion typing text Starter 
	function typeMessage(messageElement, index) {
		const text = $(messageElement).find('.message-text').text();
		$(messageElement).find('.message-text').text('');
		$(messageElement).css('opacity', '1');
		let i = 0;
		const typingInterval = setInterval(() => {
			if (i < text.length) {
				$(messageElement).find('.message-text').append(text.charAt(i));
				i++;
			} else {
				clearInterval(typingInterval);
				if (index < $('.image-text .message').length - 1) {
					typeMessage($('.image-text .message').eq(index + 1), index + 1);
				}
			}
		}, 50);
	}
	setTimeout(() => {
		typeMessage($('.image-text .message').eq(0), 0);
	}, 1000);
	//  Hero Secrion typing text end 

	//  For Employ Sticky 
	$(".sticky").each(function (index) {
		$(this).addClass("sticky-" + (index + 1))
	})


	// play Video  starter
	document.querySelectorAll('.play-button').forEach(button => {
		button.addEventListener('click', function() {
			const videoId = this.getAttribute('data-video-id');
			const thumbnailId = this.getAttribute('data-thumbnail-id');
			const video = document.getElementById(videoId);
			const thumbnail = document.getElementById(thumbnailId);

			thumbnail.style.display = 'none';
			video.style.display = 'block';
			video.play();
		});
	});
// Video  end

	// Slider  Section  starter
	$(".slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	})

	$("#prev").click(function () {
		$(".slider").slick("slickPrev")
	})

	$("#next").click(function () {
		$(".slider").slick("slickNext")
	})
	// Slider  Section  end
})


// Gradiant text Script starter
document.addEventListener("DOMContentLoaded", function() {
	const observerOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1
	};

	const observerCallback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate-gradient');
			} else {
				entry.target.classList.remove('animate-gradient');
			}
		});
	};

	const observer = new IntersectionObserver(observerCallback, observerOptions);

	document.querySelectorAll('.gradient-text').forEach(element => {
		observer.observe(element);
	});
});
// Gradiant text Script end