
$('.ol_button').click(function() {
    if (panelopen) {
        $('.overlays').css('width', '83px');
        $('.overlay_content').css('display', 'none');
        panelopen = false;
    } else {
        $('.overlays').css('width', '408px');
        $('.overlay_content').css('display', 'block');
        panelopen = true;
    }
  });
