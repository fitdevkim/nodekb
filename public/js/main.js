$(document).ready(()=>{
    $('.delete-article').on('click', (e)=>{
        $target = $(e.target);
        const id = $target.attr('data-id');
        var confirmation = confirm('Are you sure?');

        if(confirmation) {
            $.ajax({
                type: 'DELETE',
                url: '/articles/'+id,
                success: (response)=>{
                    window.location.href='/'
                },
                error: (err)=>{
                    console.log(err);
                }
            });
        } else {
            return false;
        }
    });
});
