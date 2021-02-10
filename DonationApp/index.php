<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="GENERATOR" content="Evrsoft First Page">
    <title>Donate</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <section>
        <div class="container">
            <div class = 'contactinfo'>
                <div class="imgbx">
                   <img src="./media/img/banner.jpg" alt="">
                </div>
                <div class="content">
                    <h3>"Service to others is the rent you pay for your room here on earth".</h3>
                     <h2>-By Mohammed Ali</h2>
                </div>
            </div>

         <div class = "contactform">
            <h2>Donate for charity Fund</h2>
            <form action="./checkOut.php" method="POST" >
            <div class = "formbox">
               <div class ="inputbox w100">
                <input  type ="text" name = "name" id="name" required>
                <span>Name</span> 
               </div>
               
               <div class ="inputbox w100">
                   <input  type ="text" name = "email" id="email" required>
                   <span>Email Address</span> 
                </div>
                
                   <div class ="inputbox w100">
                   <input  type ="text" name = "amount" id="amount" required>
                   <span>Amount</span> 
                   </div>

                <div class ="inputbox w100">
                <input type ="submit"  value = "Donate" name="donateBtn" id="donateBtn">
                </form>
                </div>


            </div>
          
         </div>
        </div>
    </section>
     <script src="./js/jquery.js"></script> 
     <script src="./js/form_validation.js"></script>
    <script>
        
    </script>
</body>
</html>