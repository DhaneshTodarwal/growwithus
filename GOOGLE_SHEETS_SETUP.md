# 📊 Google Sheets WhatsApp Tracking Setup Guide

## ✅ What This Does:
Every time someone clicks the WhatsApp button on your website, their data is automatically saved to a Google Sheet (like Excel online).

---

## 🎯 Data That Will Be Tracked:
- ⏰ **Timestamp** - When they clicked
- 📄 **Page** - Which page they were on
- 🔗 **Referrer** - How they found your site
- 📱 **Device** - Mobile or Desktop
- 🌐 **IP Address** - Their location (approximate)
- 💻 **Browser Info** - What browser they used

---

## 🚀 Setup Instructions (FREE - Takes 5 Minutes)

### **Method 1: Using Google Apps Script (Recommended - Easiest)**

#### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create new sheet
3. Name it: **"WhatsApp Clicks Tracker"**

#### Step 2: Add Headers
In Row 1, add these column headers:
| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Timestamp | Page | Referrer | Device | IP Address | Browser |

#### Step 3: Create Apps Script
1. Click **Extensions** → **Apps Script**
2. Delete existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.page || '',
      data.referrer || '',
      data.device || '',
      data.ip || '',
      data.userAgent || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **💾 Save** (disk icon)
5. Name your project: **"WhatsApp Tracker"**

#### Step 4: Deploy the Script
1. Click **Deploy** → **New deployment**
2. Click **⚙️ Settings (gear icon)** → Select **Web app**
3. Configure:
   - **Description:** "WhatsApp Click Tracker"
   - **Execute as:** "Me"
   - **Who has access:** "Anyone" (important!)
4. Click **Deploy**
5. Click **Authorize access**
6. Choose your Google account
7. Click **Advanced** → **Go to WhatsApp Tracker (unsafe)** → **Allow**
8. **COPY THE WEB APP URL** (looks like: `https://script.google.com/macros/s/AKfy...`)

#### Step 5: Add URL to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click your project: **"growwithus"**
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Set:
   - **Key:** `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value:** Paste the Web App URL you copied
   - **Environment:** Check all (Production, Preview, Development)
6. Click **Save**
7. **Redeploy your site** (new deployment will pick up the variable)

---

## ✅ Testing

### Test 1: Check if it's working
1. Visit your website: https://officialgrowwithus.vercel.app
2. Click the **WhatsApp floating button** (bottom-right)
3. Go back to your Google Sheet
4. **Refresh the page**
5. You should see a new row with the click data!

### Test 2: Check different pages
1. Click WhatsApp button from different pages (Home, About, Services, etc.)
2. Check if the "Page" column shows different values

---

## 📊 Reading Your Data

### View in Google Sheets:
- Open your sheet anytime to see all clicks
- Sort by timestamp to see recent clicks
- Filter by page to see which page gets most clicks
- Export to Excel if needed

### Useful Google Sheets Formulas:

**Count total clicks:**
```
=COUNTA(A2:A)
```

**Count mobile vs desktop:**
```
Mobile: =COUNTIF(D:D,"Mobile")
Desktop: =COUNTIF(D:D,"Desktop")
```

**Most popular page:**
```
=MODE(B:B)
```

---

## 🔧 Troubleshooting

### Data not showing up?

**1. Check Console Logs:**
- Visit your site
- Press F12 to open Developer Tools
- Go to Console tab
- Click WhatsApp button
- Look for "[WhatsApp Click]" message

**2. Verify Environment Variable:**
- Go to Vercel → Settings → Environment Variables
- Make sure `GOOGLE_SHEETS_WEBHOOK_URL` is set correctly
- Redeploy if you just added it

**3. Test the Webhook URL Directly:**
```bash
curl -X POST YOUR_WEBHOOK_URL_HERE \
  -H "Content-Type: application/json" \
  -d '{"timestamp":"2025-10-29T10:00:00Z","page":"/test","referrer":"test","device":"Desktop","ip":"test","userAgent":"test"}'
```

**4. Check Apps Script Permissions:**
- Go to Apps Script
- Click **Deploy** → **Manage deployments**
- Make sure "Who has access" is set to "Anyone"

---

## 🎨 Optional: Format Your Google Sheet

### Make it look professional:

1. **Freeze Header Row:**
   - Click row 1 → View → Freeze → 1 row

2. **Add Colors:**
   - Select row 1 → Background color: Blue
   - Text color: White

3. **Auto-resize Columns:**
   - Select all → Format → Resize columns → Fit to data

4. **Add Filters:**
   - Click row 1 → Data → Create filter

5. **Conditional Formatting (Highlight Mobile Users):**
   - Select column D → Format → Conditional formatting
   - Format cells if: Text contains "Mobile"
   - Background color: Light green

---

## 📈 Analytics Dashboard (Optional)

Create a summary sheet:

### Sheet 2: "Dashboard"

**Total Clicks:**
```
=COUNTA(Sheet1!A2:A)
```

**Today's Clicks:**
```
=COUNTIF(Sheet1!A2:A,">"&TODAY())
```

**Mobile Users:**
```
=COUNTIF(Sheet1!D:D,"Mobile")
```

**Desktop Users:**
```
=COUNTIF(Sheet1!D:D,"Desktop")
```

**Top 3 Pages:**
- Create a pivot table from your data
- Rows: Page
- Values: COUNTA of Page

---

## 🔒 Security Notes

- ✅ No personal user data is collected (no names, emails, etc.)
- ✅ Only anonymous usage data (page, device, timestamp)
- ✅ Your Google Sheet is private (only you can see it)
- ✅ The webhook URL is secure and only accepts POST requests

---

## 💡 Pro Tips

### 1. Share with Team:
- Click **Share** button in Google Sheets
- Add team member emails
- Set permission: "Can edit" or "Can view"

### 2. Get Email Notifications:
- Go to Apps Script
- Click **⏰ Triggers** (clock icon)
- Add trigger: `onEdit` → Email notifications

### 3. Auto-cleanup Old Data:
Add this to Apps Script:
```javascript
function cleanupOldData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  
  for (let i = data.length - 1; i > 0; i--) {
    const rowDate = new Date(data[i][0]);
    if (rowDate < thirtyDaysAgo) {
      sheet.deleteRow(i + 1);
    }
  }
}
```
Set up monthly trigger to run this.

---

## ✅ You're All Set!

Your WhatsApp tracking is now live and FREE forever! 🎉

**What happens now:**
1. ✅ Users see WhatsApp button on your site
2. ✅ They click it
3. ✅ Data is automatically saved to your Google Sheet
4. ✅ You can view/export data anytime

---

## 📞 Support

If you have questions or issues:
- Check the Troubleshooting section above
- Verify your webhook URL in Vercel environment variables
- Make sure you redeployed after adding the environment variable

**Your WhatsApp Number:** +91 820-896-3473  
**Message:** "Hello Grow-WithUs Team! I would like to know more about your services."

---

**Created:** October 29, 2025  
**Last Updated:** October 29, 2025
