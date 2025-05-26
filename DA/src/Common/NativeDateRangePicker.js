// import React, { useState } from "react";
// import { Calendar, ChevronDown } from "lucide-react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

// export default function NativeDateRangePicker({}) {
//   const [startDate, setStartDate] = useState("2024-11-05");
//   const [endDate, setEndDate] = useState("2025-01-30");
//   const [openPicker, setOpenPicker] = useState(false);
//   const [openEndPicker, setOpenEndPicker] = useState(false);

//   const formatDisplayDate = (dateStr) => {
//     if (!dateStr) return "";
//     const options = { year: "numeric", month: "short", day: "2-digit" };
//     return new Date(dateStr)
//       .toLocaleDateString("en-US", options)
//       .replace(",", "");
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div style={styles.wrapper}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "8.5px",
//             width: "100%",
//           }}
//         >
//           <Calendar size={16} style={styles.icon} />
//           <span style={styles.text}>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 width: "100%",
//               }}
//             >
//               <div onClick={() => setOpenPicker(true)}>
//                 {formatDisplayDate(startDate)}
//               </div>{" "}
//               -{" "}
//               <div onClick={() => setOpenEndPicker(true)}>
//                 {formatDisplayDate(endDate)}
//               </div>
//             </div>
//           </span>

//           {
//             <div style={styles.inputs}>
//               <DatePicker
//                 open={openPicker}
//                 onClose={() => setOpenPicker(false)}
//                 value={dayjs(startDate)}
//                 onChange={(newValue) => {
//                   setStartDate(newValue?.format("YYYY-MM-DD"));
//                   setOpenEndPicker(false);
//                 }}
//                 slotProps={{ textField: { style: { display: "none" } } }}
//               />
//               <DatePicker
//                 open={openEndPicker}
//                 onClose={() => setOpenEndPicker(false)}
//                 value={dayjs(endDate)}
//                 onChange={(newValue) =>
//                   setEndDate(newValue?.format("YYYY-MM-DD"))
//                 }
//                 slotProps={{ textField: { style: { display: "none" } } }}
//               />
//             </div>
//           }
//         </div>
//         <span>
//           <ChevronDown />
//         </span>
//       </div>
//     </LocalizationProvider>
//   );
// }

// const styles = {
//   wrapper: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "white",
//     borderRadius: "10px",
//     padding: "10px",
//     border: "1px solid #616161",
//     fontFamily: "sans-serif",
//     fontWeight: "bold",
//     fontSize: "14px",
//     position: "relative",
//     cursor: "pointer",
//     width: "100%",
//     maxWidth: "270px",
//     height: "40px",
//   },
//   icon: {
//     color: "#4b5563",
//   },
//   text: {
//     color: "#111827",
//     width: "100%",
//   },
//   inputs: {
//     display: "flex",
//     position: "relative",
//     inset: 0,
//     opacity: 0,
//     pointerEvents: "none",
//     bottom: 0,
//   },
//   hiddenInput: {
//     width: "50%",
//     height: "100%",
//     border: "none",
//     background: "transparent",
//     cursor: "pointer",
//   },
// };
