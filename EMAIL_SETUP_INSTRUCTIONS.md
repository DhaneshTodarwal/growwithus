# 📧 Email Notification Setup - Web3Forms (FREE)

## ✅ You're Almost Done!

Email notifications are **configured** but need a FREE API key from Web3Forms.

---

## 🚀 Quick Setup (2 Minutes)

### **Step 1: Get Your FREE API Key**

1. Go to: **https://web3forms.com/**
2. Click **"Get Started - It's Free"**
3. Enter your email: `officialgrowwithus1@gmail.com`
4. Click **"Create Access Key"**
5. **Copy the API key** they give you (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### **Step 2: Verify Your Email**

- Check your inbox: `officialgrowwithus1@gmail.com`
- Click the verification link from Web3Forms
- This confirms you'll receive notifications

### **Step 3: Add API Key to Your Code**

Open the file: `apps/api/src/index.js`

Find line ~48 that says:
```javascript
access_key: 'YOUR_WEB3FORMS_KEY',
```

Replace `YOUR_WEB3FORMS_KEY` with your actual key:
```javascript
access_key: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
```

### **Step 4: Restart Your Server**

In terminal:
1. Press `Ctrl+C` to stop the server
2. Run: `npm run dev` to restart

---

## 🎉 **That's It! You're Done!**

Now when someone submits a quote form:
1. ✅ Data is saved to `apps/api/data/quotes.json`
2. ✅ **Email sent to:** `officialgrowwithus1@gmail.com`
3. ✅ Email includes all form details

---

## 📧 **What the Email Will Look Like:**

**Subject:** 🎉 New Quote Request from [Customer Name]

**Content:**
- Name: [Name]
- Email: [Email]
- Company: [Company]
- Project Type: [Web/App/AI/Other]
- Message: [Their message]
- Submission ID: [Unique ID]
- Time: [Date & Time]

---

## 🎁 **Web3Forms FREE Plan Includes:**

- ✅ **Unlimited emails** (no monthly limit)
- ✅ No credit card required
- ✅ No expiration
- ✅ Instant delivery
- ✅ Spam filtering
- ✅ File attachments support

---

## 🔧 **Alternative: Environment Variable (Recommended for Production)**

For better security, you can also use environment variables:

1. Create a `.env` file in `apps/api/`:
```env
WEB3FORMS_API_KEY=your-actual-key-here
```

2. Update the code to use:
```javascript
access_key: process.env.WEB3FORMS_API_KEY || 'YOUR_WEB3FORMS_KEY',
```

---

## 🆘 **Need Help?**

- Web3Forms Docs: https://docs.web3forms.com/
- Support: https://web3forms.com/contact

---

## ✅ **Quick Test:**

After setup:
1. Go to: http://localhost:3000/pricing
2. Fill out the form
3. Submit
4. Check your email: `officialgrowwithus1@gmail.com`
5. You should receive an email within 30 seconds! 🎉

---

**Note:** Make sure to verify your email with Web3Forms first, otherwise emails will be blocked!
