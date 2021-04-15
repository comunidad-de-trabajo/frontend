import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ModalTermsAndConditions from './modal/ModalTerminosYCondiciones/ModalTerminosYCondiciones';

export const DatosRepresentante = () => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = ({ target }) => {
    setIsActive(target.checked);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos del representante
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre/s"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido/s"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="position"
            name="position"
            label="Cargo"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="code"
            name="code"
            label="Cod. Área"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Teléfono"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                checked={isActive}
                onChange={handleChange}
              />
            }
            label="Acepto los términos y condiciones"
          />
        </Grid>
      </Grid>
      <ModalTermsAndConditions
        isActive={isActive}
        handleChange={handleChange}
      />
    </React.Fragment>
  );
};

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Grid from '@material-ui/core/Grid';

// const products = [
//   { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
//   { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
//   { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//   { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];
// const addresses = [
//   '1 Material-UI Drive',
//   'Reactville',
//   'Anytown',
//   '99999',
//   'USA',
// ];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

// const useStyles = makeStyles((theme) => ({
//   listItem: {
//     padding: theme.spacing(1, 0),
//   },
//   total: {
//     fontWeight: 700,
//   },
//   title: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function DatosRepresentante() {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Order summary
//       </Typography>
//       <List disablePadding>
//         {products.map((product) => (
//           <ListItem className={classes.listItem} key={product.name}>
//             <ListItemText primary={product.name} secondary={product.desc} />
//             <Typography variant="body2">{product.price}</Typography>
//           </ListItem>
//         ))}
//         <ListItem className={classes.listItem}>
//           <ListItemText primary="Total" />
//           <Typography variant="subtitle1" className={classes.total}>
//             $34.06
//           </Typography>
//         </ListItem>
//       </List>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h6" gutterBottom className={classes.title}>
//             Shipping
//           </Typography>
//           <Typography gutterBottom>John Smith</Typography>
//           <Typography gutterBottom>{addresses.join(', ')}</Typography>
//         </Grid>
//         <Grid item container direction="column" xs={12} sm={6}>
//           <Typography variant="h6" gutterBottom className={classes.title}>
//             Payment details
//           </Typography>
//           <Grid container>
//             {payments.map((payment) => (
//               <React.Fragment key={payment.name}>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.name}</Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.detail}</Typography>
//                 </Grid>
//               </React.Fragment>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }
