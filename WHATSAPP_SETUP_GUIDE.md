# 📊 WhatsApp Click Tracking - Google Sheets Setup Guide

## ✅ What Was Added:

### 1. **Floating WhatsApp Button**
- Location: Bottom-right corner of every page
- Phone: +91 8208963473
- Message: "Hello Grow-WithUs Team! I would like to know more about your services."
- Features: Pulse animation, hover tooltip, click tracking

### 2. **Header WhatsApp Button**
- Location: Next to Contact button in desktop header
- Same phone number and message
- Shows "WhatsApp" text on larger screens

### 3. **Click Tracking API**
- Endpoint: `/api/whatsapp-track`
- Tracks: Timestamp, page URL, referrer, device type, IP address
- Sends data to Google Sheets (optional setup below)

---

## 🚀 **Quick Start (Without Google Sheets)**

The WhatsApp buttons work immediately! Even without Google Sheets setup:
- ✅ Users can click and message you on WhatsApp
- ✅ Clicks are logged to console (visible in Vercel logs)
- ✅ Phone number: **+91 8208963473**

---

## 📊 **Google Sheets Integration (Optional - FREE)**

To save click data to a Google Sheet that you can view like Excel:

### **Option 1: Using Google Apps Script (Easiest - 5 minutes)**

#### Step 1: Create a Google Sheet
1. Go to https://sheets.google.com
2. Create a new sheet called "WhatsApp Clicks"
3. Add these column headers in Row 1:
   - A1: `Timestamp`
   - B1: `Page`
   - C1: `Referrer`
   - D1: `Device`
   - E1: `IP Address`
   - F1: `User Agent`

#### Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add row with data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.page || '',
      data.referrer || '',
      data.device || '',
      data.ip || '',
      data.userAgent || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy → New deployment**
5. Click the gear icon ⚙️ next to "Select type"
6. Choose **Web app**
7. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy**
9. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/ABC.../exec`)

#### Step 3: Add to Vercel Environment Variables
1. Go to https://vercel.com
2. Open your project → Settings → Environment Variables
3. Add new variable:
   - **Name:** `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value:** [Paste the Web App URL from Step 2]
   - **Environment:** Production, Preview, Development
4. Click **Save**
5. **Redeploy** your site (go to Deployments → click latest → Redeploy)

✅ **Done!** Every WhatsApp click will now be logged to your Google Sheet!

---

## 📊 **What Data is Tracked:**

Each WhatsApp click saves:
- **Timestamp** - When they clicked (e.g., "2025-10-29 14:30:45")
- **Page** - Which page they were on (e.g., "/pricing", "/services")
- **Referrer** - How they found your site (e.g., "google.com", "direct")
- **Device** - Mobile or Desktop
- **IP Address** - Their IP (for location tracking)
- **User Agent** - Browser and device info

---

## 📈 **Example Google Sheet Data:**

| Timestamp | Page | Referrer | Device | IP Address |
|-----------|------|----------|--------|------------|
| 2025-10-29 14:30:45 | /pricing | google.com | Mobile | 103.x.x.x |
| 2025-10-29 15:22:10 | /services | direct | Desktop | 182.x.x.x |
| 2025-10-29 16:05:33 | / | facebook.com | Mobile | 117.x.x.x |

---

## 🎯 **Benefits:**

✅ Know which pages drive the most WhatsApp messages  
✅ See peak times for inquiries  
✅ Track if people come from Google, Facebook, etc.  
✅ Mobile vs Desktop usage patterns  
✅ Export to Excel anytime  
✅ Share with team members  
✅ Add notes/follow-up status  

---

## 🔧 **Testing:**

1. Visit your website: https://officialgrowwithus.vercel.app
2. Click the WhatsApp button
3. Check your Google Sheet - a new row should appear!
4. Check your WhatsApp - the message should be pre-filled

---

## ❓ **Troubleshooting:**

**Q: WhatsApp button not showing?**
- Clear browser cache and refresh
- Check if page is fully loaded

**Q: Data not appearing in Google Sheet?**
- Check Vercel environment variable is set correctly
- Make sure you redeployed after adding the variable
- Check Apps Script is deployed as "Anyone" can access

**Q: Want to change the message?**
- Edit `WhatsAppButton.tsx` component
- Look for the `message` prop
- Redeploy

---

## 📞 **WhatsApp Link Format:**

The button opens: `https://wa.me/918208963473?text=Hello Grow-WithUs Team! I would like to know more about your services.`

- **918208963473** = Country code (91) + Phone number (8208963473)
- Message is URL encoded automatically

---

## 🎨 **Customization Options:**

You can customize in `WhatsAppButton.tsx`:
- Button colors (currently: WhatsApp green #25D366)
- Message text
- Position
- Animation style
- Tooltip text

---

## 📱 **Mobile Friendly:**

- ✅ Works on all devices
- ✅ Opens WhatsApp app on mobile
- ✅ Opens WhatsApp Web on desktop
- ✅ Responsive button size
- ✅ Touch-optimized

---

## 🚀 **Next Steps:**

1. ✅ Deploy and test the buttons
2. ✅ Set up Google Sheets (optional but recommended)
3. ✅ Monitor incoming WhatsApp messages
4. ✅ Track which pages convert best
5. ✅ Respond to inquiries quickly!

---

**Your WhatsApp buttons are ready to use! 🎉**
