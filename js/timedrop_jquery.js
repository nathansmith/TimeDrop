/*
	This file depends on the jQuery JavaScript library.
*/

// Initialize.
function init_timedrop(time_config) {

	// Twenty-four hour?
	if (time_config === 24) {

		// Insert 24-hour code.
		$('body').append('<div id="timedrop"><div id="timedrop_scroll"><ul><li><a href="#">00:00</a></li><li><a href="#">00:30</a></li><li><a href="#">01:00</a></li><li><a href="#">01:30</a></li><li><a href="#">02:00</a></li><li><a href="#">02:30</a></li><li><a href="#">03:00</a></li><li><a href="#">03:30</a></li><li><a href="#">04:00</a></li><li><a href="#">04:30</a></li><li><a href="#">05:00</a></li><li><a href="#">05:30</a></li><li><a href="#">06:00</a></li><li><a href="#">06:30</a></li><li><a href="#">07:00</a></li><li><a href="#">07:30</a></li><li><a href="#">08:00</a></li><li><a href="#">08:30</a></li><li><a href="#">09:00</a></li><li><a href="#">09:30</a></li><li><a href="#">10:00</a></li><li><a href="#">10:30</a></li><li><a href="#">11:00</a></li><li><a href="#">11:30</a></li><li id="timedrop_divider"><a href="#">12:00</a></li><li><a href="#">12:30</a></li><li><a href="#">13:00</a></li><li><a href="#">13:30</a></li><li><a href="#">14:00</a></li><li><a href="#">14:30</a></li><li><a href="#">15:00</a></li><li><a href="#">15:30</a></li><li><a href="#">16:00</a></li><li><a href="#">16:30</a></li><li><a href="#">17:00</a></li><li><a href="#">17:30</a></li><li><a href="#">18:00</a></li><li><a href="#">18:30</a></li><li><a href="#">19:00</a></li><li><a href="#">19:30</a></li><li><a href="#">20:00</a></li><li><a href="#">20:30</a></li><li><a href="#">21:00</a></li><li><a href="#">21:30</a></li><li><a href="#">22:00</a></li><li><a href="#">22:30</a></li><li><a href="#">23:00</a></li><li><a href="#">23:30</a></li></ul></div></div>');
	} else {

		// Insert 12-hour code.
		$('body').append('<div id="timedrop"><div id="timedrop_scroll"><ul><li><a href="#">12:00 AM</a></li><li><a href="#">12:30 AM</a></li><li><a href="#">1:00 AM</a></li><li><a href="#">1:30 AM</a></li><li><a href="#">2:00 AM</a></li><li><a href="#">2:30 AM</a></li><li><a href="#">3:00 AM</a></li><li><a href="#">3:30 AM</a></li><li><a href="#">4:00 AM</a></li><li><a href="#">4:30 AM</a></li><li><a href="#">5:00 AM</a></li><li><a href="#">5:30 AM</a></li><li><a href="#">6:00 AM</a></li><li><a href="#">6:30 AM</a></li><li><a href="#">7:00 AM</a></li><li><a href="#">7:30 AM</a></li><li><a href="#">8:00 AM</a></li><li><a href="#">8:30 AM</a></li><li><a href="#">9:00 AM</a></li><li><a href="#">9:30 AM</a></li><li><a href="#">10:00 AM</a></li><li><a href="#">10:30 AM</a></li><li><a href="#">11:00 AM</a></li><li><a href="#">11:30 AM</a></li><li id="timedrop_divider"><a href="#">12:00 PM</a></li><li><a href="#">12:30 PM</a></li><li><a href="#">1:00 PM</a></li><li><a href="#">1:30 PM</a></li><li><a href="#">2:00 PM</a></li><li><a href="#">2:30 PM</a></li><li><a href="#">3:00 PM</a></li><li><a href="#">3:30 PM</a></li><li><a href="#">4:00 PM</a></li><li><a href="#">4:30 PM</a></li><li><a href="#">5:00 PM</a></li><li><a href="#">5:30 PM</a></li><li><a href="#">6:00 PM</a></li><li><a href="#">6:30 PM</a></li><li><a href="#">7:00 PM</a></li><li><a href="#">7:30 PM</a></li><li><a href="#">8:00 PM</a></li><li><a href="#">8:30 PM</a></li><li><a href="#">9:00 PM</a></li><li><a href="#">9:30 PM</a></li><li><a href="#">10:00 PM</a></li><li><a href="#">10:30 PM</a></li><li><a href="#">11:00 PM</a></li><li><a href="#">11:30 PM</a></li></ul></div></div>');
	}

	// Time picker <div>.
	var TMD = $('#timedrop');

	// Listen for clicks.
	$('a.timedrop_trigger').click(function() {

		// Clicked link.
		var TMD_trigger = $(this);

		// Nearest <input>.
		var TMD_input = TMD_trigger.prev('input:text');

		// Clock image.
		var TMD_img = TMD_trigger.find('img:first');

		// Top position.
		var TMD_top = Math.floor(TMD_img.offset().top) + 18 + 'px';

		// Left position.
		var TMD_left = Math.floor(TMD_img.offset().left) - 40 + 'px';

		// Is it already visible and in the right place?
		if (TMD.is(':visible') && TMD.css('top') === TMD_top && TMD.css('left') === TMD_left) {

			// Reset position.
			TMD.css({
				'top': '-9999px',
				'left': '-9999px'

			// Hide it.
			}).hide();
		} else {

			// Set position.
			TMD.css({
				'top': TMD_top,
				'left': TMD_left

			// Show it.
			}).show();
		}

		// Over-write click listener.
		$('#timedrop a').unbind().click(function() {

			// Set <input> = time.
			TMD_input.val($(this).html()).focus();

			// Hide it.
			TMD.hide();

			// Nofollow.
			this.blur();
			return false;
		});

		// Nofollow.
		this.blur();
		return false;
	});

	// If anything clicked.
	$('body').click(function() {

		// Ensure clicked element wasn't a time trigger.
		if (TMD.is(':visible') && !$(this).hasClass('timedrop_trigger')) {

			// Hide it.
			TMD.hide();
		}
	});
}

// Kick things off.
$(document).ready(function() {

	// Make sure triggers exist.
	if ($('a.timedrop_trigger').length) {
		init_timedrop();
	}
});