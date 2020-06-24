const main = document.getElementById('root');
const navbar = document.createElement('nav');
const navItemList = document.createElement('ul');
const navItemLink = document.createElement('a');
const navItem = document.createElement('li');
const image = document.createElement('img');
const heading = document.createElement('h1')
const subheading = document.createElement('h3');
const divider = document.createElement('div');
const description = document.createElement('p');

const createNav = () => {
    let link1 = navItem.innerText = 'Home'
    let link2 = navItem.innerText = 'Now'
    let link3 = navItem.innerText = 'I guess fam'
    navbar.append(navItemList);
    navItemList.append(navItemLink);
    navItemLink.append(link1, link2, link3);
    navbar.classList.add('blueBackground');
    main.append(navbar);
}
createNav();


const createHeading = () => {
    image.classList.add('pic');
    heading.classList.add('h1');
    subheading.classList.add('h3');
    divider.classList.add('divider1')
    let h1 = heading.innerText = 'Hello';
    let h3 = subheading.innerText = 'Nice to meet you ';
    let img = image;
    divider.append(h1, h3, img);
    main.append(divider);
}

createHeading();

const createParagraph = () => {
    heading.classList.add('h12');
    subheading.classList.add('h32');
    divider.classList.add('divider2');
    let h1 = heading.innerText = 'Coding';
    let p = description.innerText = 'Random words times infinity.';
    let paragraph = divider;
    paragraph.append(h1, p);
    main.append(paragraph);
}

createParagraph();