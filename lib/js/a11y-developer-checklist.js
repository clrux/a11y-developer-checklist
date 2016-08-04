var Checklist = function() {

    return {

        init: function() {
            Checklist.clearResults();
            Checklist.listener();
        },

        clearResults: function() {
            $('#results .ticked-boxes').text(0)
        },

        listener: function() {
            $('#main .main-checklist input:checkbox').on('change', function() {
                var criteria = $(this);

                if (criteria.is(':checked')) {
                    Checklist.plusOne(criteria);
                } else {
                    Checklist.minusOne(criteria);
                }
            });
        },

        giftListener: function() {
            var count = parseInt($('#results .ticked-boxes').text()),
                total = parseInt($('#results .total-boxes').text());

            if (total === count) {
                var gift = [
                    '<div class="gift" tabindex="-1">',
                        '<h3>Awesome, you are a rockstar!</h3>',
                    '</div>'
                ].join('');

                Checklist.addGift(gift);
            } else {
                Checklist.removeGift();
            }
        },

        addGift: function(gift) {
            if (!$('#results').find('.gift')) {
                $('#results').append(gift);
            }
        },

        removeGift: function() {
            $('#results').find('.gift').remove();
        },

        plusOne: function(criteria) {
            var counter = parseInt($('#results .ticked-boxes').text()),
                total = parseInt($('#results .total-boxes').text()),
                updated_counter = counter + 1;

            if (updated_counter <= total) {
                $('#results .ticked-boxes').text(updated_counter);
                Checklist.addPassed(criteria);
                Checklist.giftListener();
            }
        },

        minusOne: function(criteria) {
            var counter = parseInt($('#results .ticked-boxes').text()),
                zero = 0,
                updated_counter = counter - 1;

            if (updated_counter >= zero) {
                $('#results .ticked-boxes').text(updated_counter);
                Checklist.removePassed(criteria);
                Checklist.giftListener();
            }
        },

        addPassed: function(criteria) {
            criteria.parent().parent().addClass('has-passed');
        },

        removePassed: function(criteria) {
            criteria.parent().parent().removeClass('has-passed');
        }
    };
}();

Checklist.init();
