
$('.first.circle').circleProgress({
    value: 0.98
    // fill: { gradient: ['#897468', '#402a1d','#3b200f'] }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(98 * progress) + '<i>%</i>');
});

$('.second.circle').circleProgress({
    value: 0.98
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(98 * progress) + '<i>%</i>');
});

$('.third.circle').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});

$('.fourth.circle').circleProgress({
    value: 0.7
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
});

$('.fifth.circle').circleProgress({
    value: 0.85
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
});

$('.sixth.circle').circleProgress({
    value: 0.95
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
});

$('.seventh.circle').circleProgress({
    value: .95
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
});

$('.eighth.circle').circleProgress({
    value: 0.65
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(65 * progress) + '<i>%</i>');
});


