// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// const User = () => {
//   const { userId } = useParams();
//   const [userData, setUserData] = useState(null);
//   const [invoices, setInvoices] = useState([]);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch user data based on userId
//     fetchUserData(userId);
//   }, [userId]);

//   const fetchUserData = async (id) => {
//     // Fetch logic here; replace with your API call or data fetching method
//     // For example:
//     const user = await fetchUserById(id);
//     const userInvoices = await fetchInvoicesByUserId(id);
//     const userOrders = await fetchOrdersByUserId(id);

//     setUserData(user);
//     setInvoices(userInvoices);
//     setOrders(userOrders);
//   };

//   if (!userData) {
//     return <Typography variant="h6">User data not available</Typography>;
//   }

//   return (
 

//   <Box sx={{ padding: 2 }}>
//     <Typography variant="h4" gutterBottom>
//       User Details
//     </Typography>
//     <Box sx={{ marginBottom: 4 }}>
//       <Typography variant="h6">Username: {user.Username}</Typography>
//       <Typography variant="h6">Role: {user.Role}</Typography>
//       <Typography variant="h6">Password Hash: ********</Typography>
//     </Box>

//     <Typography variant="h5" gutterBottom>
//       Invoices History
//     </Typography>
//     <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Invoice ID</TableCell>
//             <TableCell>Order ID</TableCell>
//             <TableCell>Date</TableCell>
//             <TableCell>Total Amount</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {invoices.map((invoice) => (
//             <TableRow key={invoice.invoiceId}>
//               <TableCell>{invoice.invoiceId}</TableCell>
//               <TableCell>{invoice.orderId}</TableCell>
//               <TableCell>{invoice.date}</TableCell>
//               <TableCell>{invoice.totalAmount}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//     <Typography variant="h5" gutterBottom>
//       Orders History
//     </Typography>
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Order ID</TableCell>
//             <TableCell>Date</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Total Items</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {orders.map((order) => (
//             <TableRow key={order.id}>
//               <TableCell>{order.id}</TableCell>
//               <TableCell>{order.date}</TableCell>
//               <TableCell>{order.status}</TableCell>
//               <TableCell>{order.items}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   </Box>
// );
  
// };

// export default User;


