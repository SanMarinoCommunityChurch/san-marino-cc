<script>
    export let formData;
</script>

<form class="form flow" name={formData.formName} method="POST" data-netlify="true">
    <div class="overlay"></div>
    <div class="form-description flow">
    <h2 class="text-step-3">{formData.title}</h2>
    <p>{formData.description}</p>
    </div>
    <div class="form-items flow">
    <div class="form-item split">
        <div>
        <label for={`${formData.id}_firstName`}>Your name</label>
        <input
            id={`${formData.id}_firstName`}
            name="firstName"
            type="text"
            placeholder="First name"
            autocomplete="given-name"
            required
        />
        </div>
        <div>
        <label for={`${formData.id}_lastName`} class="sr-only">Last name</label>
        <input
            id={`${formData.id}_lastName`}
            name="lastName"
            type="text"
            placeholder="Last name"
            autocomplete="family-name"
            required
        />
        </div>
    </div>
    <div class="form-item">
        <label for={`${formData.id}_email`}>Email address</label>
        <input
        id={`${formData.id}_email`}
        name="email"
        type="email"
        placeholder="email@example.com"
        autocomplete="email"
        required
        />
    </div>
    <div class="form-item">
        <label for={`${formData.id}_phone`}>Phone number</label>
        <input
        id={`${formData.id}_phone`}
        name="phone"
        type="tel"
        placeholder="Your phone"
        required
        autocomplete="tel"
        />
    </div>
    {#if formData.formType == 'general' || formData.formType == 'prayer'}
        <div class="form-item">
            <label for={`${formData.id}_text`}
            >{formData.messageText}</label
            >
            <textarea id={`${formData.id}_text`} name="message" rows="5" placeholder="Your message"></textarea>
        </div>
    {:else if formData.formType == 'care'}
        <div class="form-item">
            <label for={`${formData.id}_text`}
            >{formData.messageText}</label
            >
            <textarea id={`${formData.id}_text`} name="message" rows="5" placeholder="Your message" required></textarea>
        </div>
        <div class="form-item">
            <label for={`${formData.id}_contact`}>Best way to contact you:</label>
            <select id={`${formData.id}_contact`} name="contactPreference" required>
                <option value="">Choose an option:</option>
                <option value="phone">Phone Call</option>
                <option value="text">Text Message</option>
                <option value="email">Email</option>
            </select>
        </div>
        <div class="form-item">
            <label for={`${formData.id}_previousCounseling`}>Have you been in counseling before?</label>
            <select id={`${formData.id}_previousCounseling`} name="previousCounseling" required>
                <option value="">Choose an option:</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
    {/if}
    <div>
        <input type="submit" />
    </div>
    </div>
</form>

<style>
  .form {
    position: relative;
    border-radius: var(--rounded-corners);
    padding-inline: var(--space-l);
    padding-block-start: var(--space-2xl);
    padding-block-end: var(--space-l);
    box-shadow: var(--shadow-base);
    border: 1px solid var(--color-neutral-100);
    max-width: 50rem;
    margin-inline: auto;
  }

  .form-items.flow {
    --flow-space: var(--space-m);
  }

  .form-item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-item.split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .form-item.split > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: flex-end;
  }

  label {
    font-size: var(--step-1);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-header);
    color: var(--color-header-text);
  }

  .form-item:has(input[required]) label::after {
    content: "*";
    position: relative;
    top: -5px;
    left: 5px;
    color: red;
    font-size: var(--step--1);
  }

  .form-item:has(textarea[required]) label::after {
    content: "*";
    position: relative;
    top: -5px;
    left: 5px;
    color: red;
    font-size: var(--step--1);
  }

  .form-item:has(select[required]) label::after {
    content: "*";
    position: relative;
    top: -5px;
    left: 5px;
    color: red;
    font-size: var(--step--1);
  }

  input,
  textarea,
  select {
    padding: 0.5rem 1rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    color: var(--color-body-text);
    font-variant-numeric: lining-nums;
    border: 1px solid var(--color-primary-200);
    border-radius: var(--rounded-corners);
  }

  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: var(--color-primary-800) auto 1px;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--color-neutral-200);
  }

  input[type="submit"] {
    background-color: var(--color-primary-800);
    color: var(--color-white);
    font-size: var(--step--1);
    line-height: 1.15;
    padding: 0.75em 1em 0.78rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-semi);
    text-transform: uppercase;
    letter-spacing: 1.5pt;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.45rem;
    transition: all 0.2s ease-in-out;
  }

  input[type="submit"]:hover {
    background-color: var(--color-primary-900);
  }

  input[type="submit"] {
    cursor: pointer;
  }

  .form .overlay {
    display: var(--display);
    z-index: -10;
    position: absolute;
    -webkit-mask-image: linear-gradient(to bottom, black, transparent 40%);
    mask-image: linear-gradient(to bottom, black, transparent 40%);
    inset: 0;
    opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 80 80'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='church-on-sunday' fill='%230a3d8f' fill-opacity='1'%3E%3Cpath d='M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0 1 74.64 20a39.9 39.9 0 0 1 5.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0 1 80 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 0 1-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0V79.94c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 0 1 0 40.06V37.17l.1-.1A39.9 39.9 0 0 1 5.36 20 39.9 39.9 0 0 1 .1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0 1 24.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0 1 40 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0 1 40 0h2.83l10.33 10.34A39.83 39.83 0 0 1 77.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 0 1-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 0 1-3.79-4.9 37.88 37.88 0 0 0-4.2 12.88zM47.68 60a37.98 37.98 0 0 0 4.07 5.42L57.17 60l-5.42-5.42A38 38 0 0 0 47.68 60zm2.66-6.84a40.06 40.06 0 0 0-3.79 4.9 37.88 37.88 0 0 1-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 0 0-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0 0 72.32 60a38.11 38.11 0 0 0-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 0 0-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0 0 34.64 60a39.9 39.9 0 0 0 5.24-17.06l.11-.11.1.1A39.9 39.9 0 0 0 45.36 60zm9.23-48.25a37.85 37.85 0 0 1 23.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0 1 72.32 20a37.98 37.98 0 0 1-4.07 5.42zm5.2-3.47a40.05 40.05 0 0 1-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 0 1-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0 1 47.68 20a38.1 38.1 0 0 1 5.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 0 1 5.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 0 0 5.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 0 0-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 0 0-24.1-10.25l10.42-10.43a39.83 39.83 0 0 0 24.1 10.25zm-7.6-26.75a40.06 40.06 0 0 1 3.79 4.9 37.88 37.88 0 0 0 4.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 0 0-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0 0 23.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 0 0 3.79-4.9 37.88 37.88 0 0 1 4.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 0 0 7.68 60a38.11 38.11 0 0 0 5.45 6.87L20 60zm17.26-19.9L26.84 29.65a39.83 39.83 0 0 1-24.1 10.25l10.42 10.43a39.83 39.83 0 0 1 24.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 0 0-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 0 1-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 0 0-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 0 1-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 0 0 3.79 4.89zm1.41-1.42A37.99 37.99 0 0 1 7.68 20a38 38 0 0 1 4.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 0 1 3.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0 1 23.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0 1 32.32 20a38.1 38.1 0 0 1-5.45 6.87zm6.58-8.82a40.18 40.18 0 0 0-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  @media (max-width: 640px) {
    .form-item.split {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>