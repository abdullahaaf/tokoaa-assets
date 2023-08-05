/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";

$('.sidebar-menu a').each(function (index) {
    if (this.href.trim() == window.location) {
        $(this).addClass("active");
        $(this).parentsUntil('a').addClass("active");
    }
});
