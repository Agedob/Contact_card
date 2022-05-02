$(document).ready(function(){
    var contact_list_holder = []
    var f = []
    $(document).on("click", ':button', function(){
        // console.log('hello');
        // console.log($('input[name="F_Name"').val(), $('input[name="L_Name"').val());
        // console.log($().val())
        // var f = $('input[name="F_Name"').val();
        // var l = $('input[name="L_Name"').val();
        // var e = $('input[name="Email"').val();
        // var p = $('input[name="Phone"').val();
        // var temp = {first_name : f, last_name: l, email: e, phone: p}
        // console.log(temp)
        // contact_list_holder += temp
        // console.log(contact_list_holder)
        // return contact_list_holder

        // console.log($('#main_form').html()) // reset + .attr('input["name"]' , valuse)
       
        var f = $(':input').attr("value", " ")
        console.log(f)
        return (f)
    })

})