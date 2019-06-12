
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": "My name is Megan Naccarato and I have always loved art. I started creating with watercolors a few years ago and fell in love with the process. I really enjoy creating family portraits and character art like Marvel and Star Wars characters.   You can also find me on Instagram, Pinterest, Dribbble. "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": " Art by Megan   Watercolor art by Megan Naccarato     Items for Sale:                                                                                                                                                                                        Custom Watercolor Family Portraits              :               An 8” x 10” watercolor piece on high quality watercolor paper. A simple and unique way of capturing your family and the perfect gift for. . . :                                                All Projects:                              Spiderman - Watercolor   :                                           Thor - Watercolor   :                                           Hawkeye - Watercolor   :                                           Black Widow - Watercolor   :                                           Captain America - Watercolor   :                                           Iron Man - Watercolor   :                       "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/spiderman-watercolor/",
    "title": "Spiderman - Watercolor",
    "body": "2019/06/12 - "
    }, {
    "id": 6,
    "url": "http://localhost:4000/thor-watercolor/",
    "title": "Thor - Watercolor",
    "body": "2019/06/11 - "
    }, {
    "id": 7,
    "url": "http://localhost:4000/hawkeye-watercolor/",
    "title": "Hawkeye - Watercolor",
    "body": "2019/06/11 - "
    }, {
    "id": 8,
    "url": "http://localhost:4000/black-widow-watercolor/",
    "title": "Black Widow - Watercolor",
    "body": "2019/06/11 - Watercolor "
    }, {
    "id": 9,
    "url": "http://localhost:4000/captain-america-watercolor/",
    "title": "Captain America - Watercolor",
    "body": "2019/06/10 - "
    }, {
    "id": 10,
    "url": "http://localhost:4000/iron-man-watercolor/",
    "title": "Iron Man - Watercolor",
    "body": "2019/06/07 - "
    }, {
    "id": 11,
    "url": "http://localhost:4000/quick-start-guide/",
    "title": "Custom Watercolor Family Portraits",
    "body": "2018/01/11 - An 8” x 10” watercolor piece on high quality watercolor paper. A simple and unique way of capturing your family and the perfect gift for someone special! Send me the picture you want painted , and I’ll create an 8” x 10” watercolor portrait. Details  Handmade item Made to order Shipping availableTo place an order send me your information here. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});