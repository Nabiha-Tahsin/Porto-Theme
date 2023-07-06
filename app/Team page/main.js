/*
* PRODUCT SECTION START
*/

const teamMembers = document.querySelector('.team-members');


let getMember = '';

members.forEach((item, index) => {

    // NEW badge jodi na thake tahole jeno green box na ase tai ei code
    let fb  = '';
    let twitter = '';
    let linkdin = '';

    // All members doesn't have all social media for this reason i write this code 
    if (item.socialMedia.fb === "Yes") {
        fb = `<a target="_blank" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i><span>Facebook</span></a>`
    }
    if (item.socialMedia.twitter === "Yes") {
        twitter = `<a href="https://www.twitter.com/"><i class="fab fa-twitter"></i><span>Twitter</span></a>`
    }
    if (item.socialMedia.linkdin === "Yes") {
        linkdin = `<a href="http://www.linkedin.com/"><i class="fab fa-linkedin-in"></i><span>Linkedin</span></a>`
    }

    getMember += `
    
        <div class="col-12 col-sm-6 col-lg-3 isotope-item ${item.filter_class}">
            <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
                <span class="thumb-info-wrapper">
                    <a href="about-me.html">
                        <img src="${item.photo}" class="img-fluid" alt="" />
                        <span class="thumb-info-title">
                            <span class="thumb-info-inner">${item.name}</span>
                            <span class="thumb-info-type">${item.jobTittle}</span>
                        </span>
                    </a>
                </span>
                <span class="thumb-info-caption">
                    <span class="thumb-info-caption-text">${item.description}</span>
                    <span class="thumb-info-social-icons mb-4">
                        ${fb}
                        ${twitter}
                        ${linkdin}
                    </span>
                </span>
            </span>
        </div>
    `
});

teamMembers.innerHTML = getMember;
