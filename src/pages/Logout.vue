<script setup>
    import { logout } from './../state/auth'
    logout();
    window.location.href = "/";
</script>