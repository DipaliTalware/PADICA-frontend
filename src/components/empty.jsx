// return (
//     <Link>
//       <div className='card card-compact w-96 bg-base-100 shadow-xl'>
//         {data.map((eachData) => (
//           <div key={eachData.sys.id}>
//             <img
//               className='h-30'
//               src={eachData.fields.heroImage.fields.file.url}
//               alt={eachData.fields.heroImage.fields.file.fileName}
//             />
//             <div className='card-body'>
//               <h2 className='card-title'>{eachData.fields.name}</h2>
//               <h3>
//                 {eachData.fields.price} {''}EUR
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Link>
//   );
