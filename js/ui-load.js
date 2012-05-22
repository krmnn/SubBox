$(window).load(function () {
    if ($.cookie('defaultsmwidth')) {
        var width = $.cookie('defaultsmwidth');
        resizeSMSection(width);
    }
    if ($.cookie('sidebar') && $.cookie('username') && $.cookie('password')) {
        $('#SideBar').show();
        updateChatMessages();
        updateNowPlaying();
    }
    if ($.cookie('HideAZ')) {
        $('#BottomContainer').hide();
    }
    $('ul#ChangeLog li.log').each(function (i, el) {
        if (i > 3) {
            $(el).hide();
        }
    });
    resizeContent();
});
window.onbeforeunload = function () {
    closeAllNotifications();
};
$(window).resize(function () {
    resizeContent();
});
function resizeContent() {
    var screenwidth = $(window).width();
    $('.tabcontent').css({ 'height': (($(window).height() - 181)) + 'px' });
    $('.smsection').css({ 'height': (($(window).height() - 225)) + 'px' });
    var smheight = $('.smsection').height();
    var smwidth = $('.smsection').width();
    $('#BottomContainer').css({ 'top': smheight + 35 + 'px' });
    var tabwidth = $(window).width() - 170;
    if (tabwidth >= 700) {
        $('.tabcontent').css({ 'width': tabwidth + 'px' });
    }
    var tabwidth = $('.tabcontent').width();
    $('#AlbumContainer, #TrackContainer, #CurrentPlaylistContainer').css({ 'width': (tabwidth - smwidth - 50) + 'px' });
    $('#CurrentPlaylistContainer').css({ 'width': (tabwidth - 50) + 'px' });
    $('#player').css({ 'width': tabwidth + 'px' });
}
function resizeSMSection(x) {
    var defwidth = 350;
    var smwidth = $('.smsection').width();
    var newsmwidth = smwidth + parseInt(x);
    var newwidth = newsmwidth - defwidth;
    if (smwidth != newsmwidth && newsmwidth > 150 && newsmwidth < 500) {
        $('.smsection').css({ 'width': (newsmwidth - 15 ) + 'px' });
        $('.actions').css({ 'width': (newsmwidth - 5) + 'px' });
        $('#BottomContainer').css({ 'width': (newsmwidth - 16) + 'px' });
        $.cookie('defaultsmwidth', newwidth, { expires: 365, path: '/' });
        var ulwidth = newsmwidth + 6 - 25;
        $('#AlbumContainer').css({ 'margin-left': ulwidth + 'px' });
        $('#TrackContainer').css({ 'margin-left': ulwidth + 'px' });
    }
}
