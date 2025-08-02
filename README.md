# WhatsApp Chatbot (Simulated using Meta Cloud API)

## Overview
This is a full-stack demo WhatsApp chatbot interface built using **Next.js (frontend)** and **Django (backend)**. It simulates sending messages using the Meta WhatsApp Cloud API.

---

## Features

- Enter a phone number and message
- Click "Send"
- Confirm success via response from Meta API
- Secure API keys with `.env` files
- Uses pre-approved WhatsApp template (`hello_world`) for sandbox mode

---

## Folder Structure

whatsapp_chatbot/
├── backend/ # Django backend
│ ├── manage.py
│ ├── .env
│ ├── requirements.txt
│ ├── whatsappbot/
│ ├── views.py
│ ├── urls.py
├── frontend/ # Next.js frontend
│ ├── pages/
│ │ ├── index.tsx
│ ├── components/
│ │ └── SendMessageForm.js
│ ├── styles/
│ │ └── Form.module.css

yaml
Copy
Edit



---

## How to Run

### 🛠 Backend (Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py runserver
