import React from "react"
import MasonryGrid from "../components/grid/masonry-grid"
import "../styles/global.css"
import MasonryGridItem from "../components/grid/masonry-grid-item";
import image1 from "../images/img1.jpg"
import image2 from "../images/img2.jpg"
import BlogPreview from "../components/blog/blog-preview";

export default {
    title: "Blog/blog-preview-masonry-grid",
}

export const exampleStory = () => (
    <div>
        <MasonryGrid columnCount={2}>
            <MasonryGridItem>
                <BlogPreview category={"category"} title={"Some title"} subtitle={"Some subtitle"} image={image1}/>
            </MasonryGridItem>
            <MasonryGridItem>
                <BlogPreview category={"category"} title={"Some title"} subtitle={"Some subtitle"} image={image2}/>
            </MasonryGridItem>
            <MasonryGridItem>
                <BlogPreview category={"category"} title={"Some title"} subtitle={"Some subtitle"} image={image2}/>
            </MasonryGridItem>
            <MasonryGridItem>
                <BlogPreview category={"category"} title={"Some title"} subtitle={"Some subtitle"} image={image1}/>
            </MasonryGridItem>
            <MasonryGridItem>
                <BlogPreview category={"category"} title={"Some title"} subtitle={"Some subtitle"} image={image2}/>
            </MasonryGridItem>
            <MasonryGridItem>
                <BlogPreview category={"category"} title={"Some title"} subtitle={"Some subtitle"} image={image2}/>
            </MasonryGridItem>
            <MasonryGridItem>
                <BlogPreview category={"category"} title={"Some title"} subtitle={"Some subtitle"} image={image1}/>
            </MasonryGridItem>
            <MasonryGridItem>
                <BlogPreview category={"category"} title={"Some title"} subtitle={"Some subtitle"} image={image1}/>
            </MasonryGridItem>
            <MasonryGridItem>
                <BlogPreview category={"category"} title={"Some title"} subtitle={"Some subtitle"} image={image2}/>
            </MasonryGridItem>
        </MasonryGrid>
    </div>
);
