import { Navigation } from "../router/Navigation";

export const LazyLayout = () => {
    return (
        <div>
           <h1>Lazy Layout - Main Page</h1> 
           <div>
               <Navigation />
           </div>
        </div>
    )
}

export default LazyLayout;