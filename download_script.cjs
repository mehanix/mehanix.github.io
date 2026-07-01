const fs = require('fs');
const { execSync } = require('child_process');

const repos = ['bubblemancer', 'dhrw', 'Blackout'];
const regex = /https?:\/\/[^\s)"]+/gi;

for (const repo of repos) {
    const md = fs.readFileSync(`/home/nix/.gemini/antigravity/scratch/readme_dump/${repo}.md`, 'utf8');
    const matches = md.match(regex) || [];
    const urls = [...new Set(matches)];
    
    const imgUrls = urls.filter(u => /\.(png|jpe?g|gif)/i.test(u) || u.includes('imgur.com') || u.includes('user-attachments'));
    
    if (imgUrls.length > 0) {
        const dir = `/home/nix/.gemini/antigravity/scratch/portfolio-site/public/assets/projects/${repo.toLowerCase()}`;
        execSync(`mkdir -p ${dir}`);
        let filesList = [];
        imgUrls.forEach((url, index) => {
            let ext = url.match(/\.(png|jpe?g|gif)/i)?.[0] || '.png';
            const filename = `image_${index}${ext}`;
            console.log(`Downloading ${url} to ${filename}`);
            try {
                execSync(`curl -sL "${url}" -o ${dir}/${filename}`);
                filesList.push(`./assets/projects/${repo.toLowerCase()}/${filename}`);
            } catch (e) {
                console.error("Failed to download", url);
            }
        });
        console.log(`Files for ${repo}:`, filesList);
    }
}
