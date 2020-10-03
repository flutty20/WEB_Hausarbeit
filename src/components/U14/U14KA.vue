<template>
  <div>
    <p class="frage">Was ist das positive Sicherheitsmodell und warum wird es bevorzugt?</p>
    <p class="antwort">

    </p>
<br>
    <p class="frage">Nennen Sie die OWASP Top 10 Sicherheitsprobleme für WebApps.</p>
    <p class="antwort">
      <ol>
        <li>Injection</li>
        <li>Broken Authentication</li>
        <li>Sensitive Data Exposure</li>
        <li>XML External Entities (XXE)</li>
        <li>Broken Access Control</li>
        <li>Security Misconfiguration</li>
        <li>Cross-Site Scripting XSS</li>
        <li>Insecure Deserialization</li>
        <li>Using Components with Known Vulnerabilities</li>
        <li>Insufficient Logging / Monitoring</li>
      </ol>
      <a href="https://owasp.org/www-project-top-ten/">Quelle: owasp</a>
    </p>
<br>
    <p
      class="frage"
    >Was sind die General Security Guidelines?</p>
    <p class="antwort">Encryption
      <ul>
        <li>Secure socket layer</li>
        <li>Secure Tomcat installation</li>
        <li>Session management</li>
        <li>HTTP TRACE disabled</li>
        <li>Secure cookie filter</li>
        <li>XSS filter enhanced</li>
        <li>Strict-Transport-Security (HSTS)</li>
        <li>Data visualization module plug-ins</li>
        <li>Mid-tier Return Back parameter</li>
        <li>Mid tier and portlet containers</li>
        <li>Mid tier access prevented by some security software</li>
        <li>Adding inclusion list for Mid Tier</li>
        <li>Related topic</li>
      </ul>
      <a href="https://docs.bmc.com/docs/ars81/general-security-guidelines-225970339.html">Quelle: bmc</a>
</p>
<br>

    <p class="frage">Beschreiben Sie die Content Security Policy (CSP) und geben Sie ein Beispiel.</p>
    <p class="antwort">The HTTP Content-Security-Policy response header allows web site administrators to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints. This helps guard against cross-site scripting attacks (XSS).
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Quelle: mdn</a>
    </p>
<br>
    <p class="frage">Beschreiben Sie Subresource Integrity (SRI) und geben Sie ein Beispiel.</p>
    <p class="antwort">Tim Berners-Lee</p>
<br>
    <p class="frage">Beschreiben Sie JSON Web Token (JWT) und geben Sie ein Beispiel.</p>
    <p class="antwort">Tim Berners-Lee</p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>