import React from "react";
import Navigation from "../Navigation/Navigation";
import Heading from '../Heading/Heading'
import TextBox from "./TextBoxes/TextBox";
import sampImg from '../../Assets/images/mnt2.jpg'

const PageSample = () => {
    const pageMountainHikeData = [
        {
            image: sampImg,
            title: 'how do you climb',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quisquam dolor, illo natus voluptas autem laudantium quibusdam veniam recusandae non quaerat eaque iure animi nulla enim! Id laudantium maxime aut! Commodi unde dolorem cumque quos inventore quam eveniet sunt id tempore quis, ut, quas placeat illum esse laboriosam doloribus odio fugit vel ducimus ipsum? Quisquam molestias asperiores aperiam, ad totam libero nulla numquam earum in quae optio quasi consequuntur veniam quod at sapiente reiciendis quis. Beatae eum facere delectus porro modi! Adipisci excepturi accusamus animi aliquam, illo corrupti magnam deleniti accusantium dicta autem ex. Explicabo corporis adipisci, voluptatibus eligendi eius ab aut distinctio! Repudiandae ducimus delectus, nesciunt eaque exercitationem maxime, excepturi error totam voluptatibus, sit sed vitae eligendi quasi beatae? Aspernatur dolore debitis, voluptate ratione ea accusamus praesentium dolor commodi dignissimos officia dolorem. Deleniti odit dolorum, obcaecati voluptas amet illo porro modi harum rem tempora perspiciatis ducimus veniam expedita necessitatibus.'
        },
        {
            image: sampImg,
            title: 'how do you climb down',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quisquam dolor, illo natus voluptas autem laudantium quibusdam veniam recusandae non quaerat eaque iure animi nulla enim! Id laudantium maxime aut! Commodi unde dolorem cumque quos inventore quam eveniet sunt id tempore quis, ut, quas placeat illum esse laboriosam doloribus odio fugit vel ducimus ipsum? Quisquam molestias asperiores aperiam, ad totam libero nulla numquam earum in quae optio quasi consequuntur veniam quod at sapiente reiciendis quis. Beatae eum facere delectus porro modi! Adipisci excepturi accusamus animi aliquam, illo corrupti magnam deleniti accusantium dicta autem ex. Explicabo corporis adipisci, voluptatibus eligendi eius ab aut distinctio! Repudiandae ducimus delectus, nesciunt eaque exercitationem maxime, excepturi error totam voluptatibus, sit sed vitae eligendi quasi beatae? Aspernatur dolore debitis, voluptate ratione ea accusamus praesentium dolor commodi dignissimos officia dolorem. Deleniti odit dolorum, obcaecati voluptas amet illo porro modi harum rem tempora perspiciatis ducimus veniam expedita necessitatibus.'
        },
        {
            image: sampImg,
            title: 'how do you keep in touch with home',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quisquam dolor, illo natus voluptas autem laudantium quibusdam veniam recusandae non quaerat eaque iure animi nulla enim! Id laudantium maxime aut! Commodi unde dolorem cumque quos inventore quam eveniet sunt id tempore quis, ut, quas placeat illum esse laboriosam doloribus odio fugit vel ducimus ipsum? Quisquam molestias asperiores aperiam, ad totam libero nulla numquam earum in quae optio quasi consequuntur veniam quod at sapiente reiciendis quis. Beatae eum facere delectus porro modi! Adipisci excepturi accusamus animi aliquam, illo corrupti magnam deleniti accusantium dicta autem ex. Explicabo corporis adipisci, voluptatibus eligendi eius ab aut distinctio! Repudiandae ducimus delectus, nesciunt eaque exercitationem maxime, excepturi error totam voluptatibus, sit sed vitae eligendi quasi beatae? Aspernatur dolore debitis, voluptate ratione ea accusamus praesentium dolor commodi dignissimos officia dolorem. Deleniti odit dolorum, obcaecati voluptas amet illo porro modi harum rem tempora perspiciatis ducimus veniam expedita necessitatibus.'
        },
        {
            image: sampImg,
            title: 'how do you eat',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quisquam dolor, illo natus voluptas autem laudantium quibusdam veniam recusandae non quaerat eaque iure animi nulla enim! Id laudantium maxime aut! Commodi unde dolorem cumque quos inventore quam eveniet sunt id tempore quis, ut, quas placeat illum esse laboriosam doloribus odio fugit vel ducimus ipsum? Quisquam molestias asperiores aperiam, ad totam libero nulla numquam earum in quae optio quasi consequuntur veniam quod at sapiente reiciendis quis. Beatae eum facere delectus porro modi! Adipisci excepturi accusamus animi aliquam, illo corrupti magnam deleniti accusantium dicta autem ex. Explicabo corporis adipisci, voluptatibus eligendi eius ab aut distinctio! Repudiandae ducimus delectus, nesciunt eaque exercitationem maxime, excepturi error totam voluptatibus, sit sed vitae eligendi quasi beatae? Aspernatur dolore debitis, voluptate ratione ea accusamus praesentium dolor commodi dignissimos officia dolorem. Deleniti odit dolorum, obcaecati voluptas amet illo porro modi harum rem tempora perspiciatis ducimus veniam expedita necessitatibus.'
        },
    ]
    return(
        <React.Fragment>
            <Navigation />
            <div className="blog__container">
                <div className="blog__blog">
                    <Heading mainHeading="mount kenya" bgText="mount kenya" subHeading="learn about mount kenya" />
                    <h5 className="blog__title--sub">By the end of this blog you will be knowledgable to how to hike mountains and all that</h5>
                    {
                        pageMountainHikeData.map((el, i) => { return <TextBox image={el.image} title={el.title} text={el.text} key={i} shouldReverse={i % 2 === 0? true: false} /> } )
                    }
                    {/* <TextBox image={sampImg} title="how do you climb" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quisquam dolor, illo natus voluptas autem laudantium quibusdam veniam recusandae non quaerat eaque iure animi nulla enim! Id laudantium maxime aut! Commodi unde dolorem cumque quos inventore quam eveniet sunt id tempore quis, ut, quas placeat illum esse laboriosam doloribus odio fugit vel ducimus ipsum? Quisquam molestias asperiores aperiam, ad totam libero nulla numquam earum in quae optio quasi consequuntur veniam quod at sapiente reiciendis quis. Beatae eum facere delectus porro modi! Adipisci excepturi accusamus animi aliquam, illo corrupti magnam deleniti accusantium dicta autem ex. Explicabo corporis adipisci, voluptatibus eligendi eius ab aut distinctio! Repudiandae ducimus delectus, nesciunt eaque exercitationem maxime, excepturi error totam voluptatibus, sit sed vitae eligendi quasi beatae? Aspernatur dolore debitis, voluptate ratione ea accusamus praesentium dolor commodi dignissimos officia dolorem. Deleniti odit dolorum, obcaecati voluptas amet illo porro modi harum rem tempora perspiciatis ducimus veniam expedita necessitatibus." /> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default PageSample