$(document).ready(function(){
    var con_list = []

    $(document).on("click", ':button', function(){

        // console.log('hello');
        // console.log($('input[name="F_Name"').val(), $('input[name="L_Name"').val());
        // console.log($().val())

        var temp = {first_name : $('input[name="F_Name"').val(), last_name: $('input[name="L_Name"').val(), email: $('input[name="Email"').val(), phone: $('input[name="Phone"').val()}
        // console.log(temp)
        con_list.push(temp)
        // console.log(contact_list_holder)
        

        // console.log($('#main_form').html()) // reset + .attr('input["name"]' , valuse)
       
        // f = $(':input').attr("value", " ");
        // console.log(f);
        // return f;



        // $( ".inputs" ).map(function() {
        //     //  console.log($( this ).val())
        //      f =+ '' + [($( this ).val())];
        //     //  console.log(f) 
        //      return f;
        //     });
        //     console.log(f)
        //     return f;


    // for (var i = 0; i < con_list.length; i++){
    //     console.log(con_list[i]);

    // }

    function SortArray(x, y){
        if (x.last_name < y.last_name) {return -1;}
        if (x.last_name > y.last_name) {return 1;}
        return 0;
    }
    var abc = con_list.sort(SortArray);
    console.log(abc);

        return abc;
    });
})