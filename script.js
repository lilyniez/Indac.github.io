<script>
        function login() {
            document.getElementById("login-page").style.display = "none";
            document.getElementById("portfolio-page").style.display = "block";
        }

        function logout() {
            document.getElementById("portfolio-page").style.display = "none";
            document.getElementById("login-page").style.display = "flex";
        }
    </script>