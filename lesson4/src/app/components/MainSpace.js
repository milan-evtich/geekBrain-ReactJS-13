import React from 'react';
import Header from "./Header";
import PostHolder from "./PostHolder";
import SideBar from "./SideBar";

class MainSpace extends React.Component {
    render() {
        const blogPosts = [
            {
                title: "Sample blog post",
                date: "January 1, 2014 by",
                author: "Jacob",
                text: "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported." +
                    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum." +
                    "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit." +
                    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
            },
            {
                title: "Another blog post",
                date: "December 23, 2013 by",
                author: "Jacob",
                text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum." +
                    "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit." +
                    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur." +
                    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
            },
            {
                title: "New feature",
                date: "December 14, 2013 by",
                author: "Chris",
                text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus." +
                    "Praesent commodo cursus magna, vel scelerisque nisl consectetur et." +
                    "Donec id elit non mi porta gravida at eget metus." +
                    "Nulla vitae elit libero, a pharetra augue." +
                    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur." +
                    "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
            }
        ];
        const modules = [
            {
                title: "About",
                inset: "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
                links: []
            },
            {
                title: "Archives",
                inset: null,
                links: [{title: "March 2014", href: "#"}, {title: "February 2014", href: "#"}, {
                    title: "January 2014",
                    href: "#"
                }, {title: "December 2013", href: "#"}, {title: "November 2013", href: "#"}, {
                    title: "October 2013",
                    href: "#"
                }, {title: "September 2013", href: "#"}, {title: "August 2013", href: "#"}, {
                    title: "July 2013",
                    href: "#"
                }, {title: "June 2013", href: "#"}, {title: "May 2013", href: "#"}, {title: "April 2013", href: "#"}]
            },
            {
                title: "Elsewhere",
                inset: null,
                links: [{title: "GitHub", href: "#"}, {title: "Twitter", href: "#"}, {title: "Facebook", href: "#"}]
            }
        ];

        return <div className={"container"}>
            <Header title={"The Bootstrap Blog"}> The official example template of creating a blog with
                Bootstrap.</Header>
            <div className={"row"}>
                <PostHolder posts={blogPosts}/>
                <SideBar modules={modules}/>
            </div>
        </div>;
    }
}


export default MainSpace;