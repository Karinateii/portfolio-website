# Deploy to Vercel - Quick Start

Your portfolio is **production-ready**! Let's deploy it to Vercel (FREE) in under 5 minutes.

## Option 1: Deploy via GitHub (Recommended - Automatic Updates)

### Step 1: Push to GitHub
```powershell
cd C:\Users\USER\Desktop\PROJECTS\Portfolio\portfolio-website

# Initialize git repo (if not already done)
git init
git add .
git commit -m "final: Production-ready portfolio"

# Add your GitHub remote (replace with your repo URL)
git remote add origin https://github.com/Karinateii/portfolio-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Select your `portfolio-website` repository
5. Click "Deploy"
6. **Done!** Your site is live in ~30 seconds

### Step 3: Custom Domain (Optional)
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., ebenezer.dev)
4. Follow DNS instructions

---

## Option 2: Deploy Directly from Folder (Quick Test)

### Step 1: Install Vercel CLI
```powershell
npm i -g vercel
```

### Step 2: Login to Vercel
```powershell
vercel login
```

### Step 3: Deploy
```powershell
cd C:\Users\USER\Desktop\PROJECTS\Portfolio\portfolio-website
vercel
```

**Answer the prompts:**
- "Set up and deploy?" → **y**
- "Which scope?" → Choose your account
- "Link to existing project?" → **n** (first time)
- "Project name?" → `portfolio-website`
- "Production branch?" → `main`

**Instant live URL**: You'll get a URL like `https://portfolio-website-xyz.vercel.app`

---

## What Gets Deployed

✅ `index.html` - Main portfolio page  
✅ `resume.html` - Standalone resume  
✅ `assets/` - All CSS, JS, images  
✅ `vercel.json` - Already configured  

---

## After Deployment

### Test Your Live Site
```
Desktop: https://your-vercel-url.com
Mobile: Test on actual phone or DevTools
Resume: https://your-vercel-url.com/resume.html
```

### Update Profile Picture
After deployment, add your photo:
1. Upload `profile.jpg` to `assets/images/`
2. Git push (auto-updates on Vercel)
3. Portfolio refreshes automatically

### Set Up Custom Domain
1. Buy domain from [Namecheap](https://namecheap.com) or similar (~$10/year)
2. Add to Vercel project settings
3. Copy DNS records from Vercel
4. Add DNS records to your domain registrar
5. Wait 24-48 hours for propagation

---

## Portfolio Stats When Live

- ✅ 6 Featured Projects (including Flappy Bird AI)
- ✅ 8 Professional Certifications (including KCNA!)
- ✅ 2+ Years Experience
- ✅ Work history (McKinsey, Freelance, etc.)
- ✅ AI/ML focus throughout
- ✅ Mobile responsive (all iPhone models tested)
- ✅ Dark theme with animations
- ✅ Contact form
- ✅ Resume page

---

## Vercel Benefits

- **FREE** forever for static sites
- **Automatic SSL/HTTPS**
- **Fast CDN** (global edge network)
- **Git auto-deployments** (push = auto-update)
- **Custom domains**
- **Environment variables**
- **Analytics dashboard**

---

## Next Steps

1. Push to GitHub OR use Vercel CLI
2. Share your live URL with:
   - ✅ LinkedIn profile
   - ✅ Resume (replace link)
   - ✅ Email signature
   - ✅ GitHub bio
3. Add profile picture
4. Monitor traffic on Vercel dashboard

---

**Ready? Choose your deployment option above and you'll be live in minutes!** 🎉

Questions? Let me know!
