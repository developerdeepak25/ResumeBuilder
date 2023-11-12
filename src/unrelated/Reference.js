// import { Margin, usePDF } from "react-to-pdf";
// import  Card  from "./Card";
// // import { Button } from "./Button";
// // import { Container } from "./Container";

// const App = () => {
//   const { toPDF, targetRef } = usePDF({
//     filename: "usepdf-example.pdf",
//     page: { margin: Margin.MEDIUM },
//   });
//   return (
//     // <Container>
//     <>

//       <button onClick={toPDF}>Download PDF</button>
//       <div ref={targetRef}>
//         <Card imageId={17} title="usePDF hook example" />
//       </div>
//     </>
//     // </Container>
//   );
// };

// export default App;

//  JSPDF /////////////////

// import React from "react";
// import jsPDF from "jspdf";
// import ResumeSection from "./ResumeSection";

// function App() {
//   const generatePDF = () => {
//     const doc = new jsPDF();
//     const resumeSection = document.getElementById("resume-section");
//     doc.setFontSize(1);
//     doc.scale(.1,.1)

//     doc.html(resumeSection, {
//       callback: function (doc) {
//         doc.save("resume.pdf");
//       },
//       // x: 10,
//       // y: 10,
//     });
//     // doc.save("resume.pdf");
//   };

//   return (
//     <div>
//       <h1>Generate PDF Resume</h1>
//       <button onClick={generatePDF}>Generate PDF</button>
//       <div id="resume-section">
//         <ResumeSection />
//       </div>
//     </div>
//   );
// }
// export default App

//

// import React, { useRef } from 'react'

// const App = () => {
//    const hideFrameRef = useRef(null);

//    const setPrint = () => {
//      const closePrint = () => {
//        document.body.removeChild(hideFrameRef.current);
//      };
//      hideFrameRef.current.contentWindow.onbeforeunload = closePrint;
//      hideFrameRef.current.contentWindow.onafterprint = closePrint;
//      hideFrameRef.current.contentWindow.print();
//    };

//    const loadExternalPage = () => {
//      const hideFrame = document.createElement("iframe");
//      hideFrame.onload = setPrint;
//      hideFrame.style.display = "none";
//      hideFrame.src = "external-page.html";
//      document.body.appendChild(hideFrame);
//      hideFrameRef.current = hideFrame;
//    };

//    return (
//      <div>
//        <button id="print_external" onClick={loadExternalPage}>
//          Print External Page
//        </button>
//      </div>
//    );
// }

// export default App

// import React from "react";

// const App = () => {
//   const printContent = () => {
//     const closePrint = () => {
//       document.body.removeChild(contentToPrint);
//     };
//     window.printOptions = {
//       showHeader: false,
//       showFooter: false,
//     };
//     const printWindow = window.open("", "", "width=800,height=600");
//     const contentToPrint =
//       document.getElementById("content-to-print").outerHTML;

//     printWindow.onafterprint = closePrint;

//     printWindow.document.open();
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Print</title>
//           <style>
//             @media print {
//               /* Define your print styles here */
//               body * {
//                 visibility: hidden;
//               }
//               #content-to-print, #content-to-print * {
//                 visibility: visible;
//               }
//             }
//           </style>
//         </head>
//         <body>${contentToPrint}</body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
//     printWindow.close();
//   };

//   return (
//     <div>
//       <button onClick={printContent}>Print Content</button>
//       <div id="content-to-print">
//         <h1
//           style={{ color: "red", display: " flex", justifyContent: "center" }}
//         >
//           heading
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useReactToPrint } from "react-to-print";
// import PrintButton from "./PrintButton";
import "./reference.css";

function PrintContent() {
  return (
    <div className="content-div">
      <div className="content">
        <h1 style={{ background: "#f00" }}>Content to Print</h1>
        <p>This is the content you want to print.</p>
        <img src={require("../img/04.08.2023_20.44.32_REC.png")} alt="" />
      </div>
    </div>
  );
}

function PrintButton() {
  const printRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current, // Ref to the PrintContent component
  });

  return (
    <div>
      <button onClick={handlePrint}>Print Content</button>
      <div ref={printRef} className="print-container">
        <PrintContent />
      </div>
      <div>dummy </div>
    </div>
  );
}

function Reference() {
  return (
    <div>
      <h1>My React App</h1>
      <PrintButton />
    </div>
  );
}

export default Reference;
