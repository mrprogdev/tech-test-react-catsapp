import React from "react";
import Layout from "./app/layout";

// function ShowCat() {
//   const dispatch = useDispatch();
//   const { loading, error, data } = useQuery(gql`
//     {
//       fetchCats {
//         id
//         name
//         image_url
//         is_liked
//         description
//         owner {
//           name
//         }
//       }
//     }
//   `);

//   // if (loading) return <><CircularProgress/><p>Loading Cats</p></>;
//   if (loading) return <Splash/>
//   if (error) return <p>Error :(</p>;
    
//     data.fetchCats.map(( cat ) => (
//       dispatch(storeCat(cat))
//   ))

//   dispatch(dataLoaded())


//   return (
//       <Grid container spacing={5}>
//       {data.fetchCats.map(({ id, name, is_liked, image_url, owner }) => (
//         <Grid item xs={6} sm={4} justify="space-evenly" alignItems="center">
//         <CatCard
//           key={id}
//           image={image_url}
//           catName={name}
//           ownerName={owner[0].name}
//         ></CatCard>
//         </Grid>
//       ))}
// </Grid>
//   );
// }

/**
 * It's useful to have this layer incase you have multiple layouts that are
 * conditional for example a logged in and logged out view.
 * In this example we just have one page so it's all good.
 */
const App = () => <Layout />;

export default App;
