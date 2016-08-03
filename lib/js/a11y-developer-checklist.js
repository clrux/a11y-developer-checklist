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
            $('#main .main-checklist input[type="checkbox"]').on('change', function() {
                console.log('clicked');
            });
        }
    };
}();

Checklist.init();
