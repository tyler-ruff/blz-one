<script setup>
    import { logout } from './../state/auth'
    await logout().then(() => {
        window.location.href = "/";
    });
</script>