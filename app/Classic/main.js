/*
* FEATURES SECTION START
*/

const feature_dynamic_left = document.querySelector('.feature-dynamic-left');
const feature_dynamic_right = document.querySelector('.feature-dynamic-right');


let getFeatureLeft = '';

features_left.forEach((item, index) => {
    getFeatureLeft += `
        <div class="feature-box feature-box-style-2">
            <div class="feature-box-icon">
                <i class="icons ${item.icon} text-color-primary"></i>
            </div>
            <div class="feature-box-info">
                <h4 class="font-weight-bold text-4-5 mb-1">${item.heading} </h4>
                <p class="mb-4">${item.description} </p>
            </div>
        </div>
    `
});

let getFeatureRight = '';

features_right.forEach((item, index) => {
    getFeatureRight += `
        <div class="feature-box feature-box-style-2">
            <div class="feature-box-icon">
                <i class="icons ${item.icon} text-color-primary"></i>
            </div>
            <div class="feature-box-info">
                <h4 class="font-weight-bold text-4-5 mb-1">${item.heading} </h4>
                <p class="mb-4">${item.description} </p>
            </div>
        </div>
    `
});


feature_dynamic_left.innerHTML = getFeatureLeft;
feature_dynamic_right.innerHTML = getFeatureRight;

/*
* FEATURES SECTION END
*/



/*
*  ACCORDION SECTION START
*/

const accordion = document.querySelector('#accordion');

let getAccordion ='';

accordionData.forEach((item, index) => {
    getAccordion += `
    <div class="card card-default">
        <div class="card-header">
            <h4 class="card-title m-0">
                <a class="accordion-toggle text-color-dark font-weight-bold" data-toggle="collapse" data-parent="#accordion" href="#${item.id}">
                    <i class="icons ${item.icon} text-color-primary"></i>
                    ${item.heading}
                </a>
            </h4>
        </div>
        <div id="${item.id}" class="collapse">
            <div class="card-body text-2">
                <p class="mb-0">${item.description} </p>
            </div>
        </div>
    </div>
    `
})

accordion.innerHTML = getAccordion;

/*
* ACCORDION SECTION END
*/



/*
* PARTNER CAROUSEL SECTION START
*/

const partner_carousel = document.querySelector('.partner-carousel');

let getCarouselImg = '';

partnerCarouselData.forEach((item) => {
    getCarouselImg += `
    <div>
        <img class="img-fluid" src="${item.img}" alt="" />
    </div>
    `
})

partner_carousel.innerHTML = getCarouselImg;

/*
* PARTNER CAROUSEL SECTION END
*/




/*
* LATEST POST SECTION START
*/

const latest_post = document.querySelector('.latest-post');

let getPost = '';

latestPostData.forEach((item, index) => {

    getPost += `

            <div class="row">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <article>
                        <div class="row">
                            <div class="col-auto pr-0">
                                <div class="date">
                                    <span class="day font-weight-extra-bold">${item[0].date}</span>
                                    <span class="month text-1">${item[0].month}</span>
                                </div>
                            </div>
                            <div class="col pl-1">
                                <h4 class="text-primary text-4"><a class="d-block" href="blog-post.html">${item[0].heading}</a></h4>
                                <p class="pr-4 mb-0">${item[0].description}</p>
                                <a href="https://www.okler.net/" class="read-more text-color-dark font-weight-semibold text-2">read more <i class="fas fa-angle-right position-relative top-1 ml-1"></i></a>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-lg-6">
                    <article>
                        <div class="row">
                            <div class="col-auto pr-0">
                                <div class="date">
                                    <span class="day font-weight-extra-bold">${item[1].date}</span>
                                    <span class="month text-1">${item[1].month}</span>
                                </div>
                            </div>
                            <div class="col pl-1">
                                <h4 class="text-primary text-4"><a class="d-block" href="blog-post.html">${item[1].heading}</a></h4>
                                <p class="pr-4 mb-0">${item[1].description}</p>
                                <a href="https://www.okler.net/" class="read-more text-color-dark font-weight-semibold text-2">read more <i class="fas fa-angle-right position-relative top-1 ml-1"></i></a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
    `
})

latest_post.innerHTML = getPost;

/*
* LATEST POST SECTION END
*/




/*
* DATA FOR TESTIMONIAL SECTION START
*/

const allTestimonial = document.querySelector('.testimonial');

let getTestimonial = '';

testimonial.forEach((item) => {
    getTestimonial += `
                <div>
                    <div class="col">
                        <div class="testimonial testimonial-primary">
                            <blockquote>
                                <p class="mb-0">${item.review}</p>
                            </blockquote>
                            <div class="testimonial-arrow-down"></div>
                            <div class="testimonial-author">
                                <div class="testimonial-author-thumbnail">
                                    <img src="${item.author.img}" class="rounded-circle" alt="" />
                                </div>
                                <p><strong>${item.author.name}</strong><span>${item.author.description}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
    `
})

allTestimonial.innerHTML = getTestimonial;

/*
* DATA FOR TESTIMONIAL SECTION END
*/
