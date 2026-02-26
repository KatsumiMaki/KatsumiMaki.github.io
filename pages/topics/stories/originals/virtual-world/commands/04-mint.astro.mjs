import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../../../chunks/Base_DMGW_6Ds.mjs';
import { $ as $$FolderLinks } from '../../../../../../chunks/FolderLinks_5Et2assD.mjs';
/* empty css                                                */
export { renderers } from '../../../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "04 Mint" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">04 Mint</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Mint had always been drawn to the world of video games. The idea of being able to be whoever you wanted and take on new challenges had always been a thrill to them. So when they had the opportunity to work as an NPC in one of the biggest games of the year, they jumped at the chance.</p> <p>As they got ready for their first day, Mint carefully picked out their outfit. They had always felt more comfortable in feminine clothing, and today was no exception. They slipped into a pastel swirl dress, admiring the way the white and green stripes arced down the dress. The frilly hem and puffy petticoat made them feel like a princess. The gown accounted for their flat chest, tailored to their body.</p> <p>Mint stood in the center of the bustling town, their poofy dress swaying in the breeze. They smiled warmly as they greeted the players who approached them, eager to help them with whatever quests they needed. As they were conversing with a new player, they noticed another player approaching them, a look of disdain etched on their face.</p> <p>The player was a tall, muscular figure with short, cropped hair. He wore a leather jacket and boots, giving off an air of superiority as he approached Mint.</p> <p>“Hey, noobs,” he said, loudly enough to draw attention to himself. “This guy here is the quest giver. You turn in quests to him and pick up new bounties.”</p> <p>Mint smiled politely and replied, “Thank you for your contribution, adventurer. Just a friendly reminder, my preferred pronouns are they/them.”</p> <p>He laughed, “But I don’t really care about that stuff. It’s just a game, after all. You’re a,” the next letters were drawled as he tapped their forehead mockingly, “N… P… C…”</p> <p>With a deep breath, Mint tried to remain professional. “I understand that it can be difficult to change your language habits,” they said, trying to hide their frustration. “But using the correct pronouns is important for creating a more inclusive and welcoming environment for everyone.”</p> <p>The encounter dragged on, the player continuing to refer to Mint as “he” and “him” despite their attempts to correct him. Mint tried to maintain their professionalism, but their discomfort was palpable. They switched to repeating lines, as simply-coded NPCs were known to do.</p> <p>Finally, their boss materialized, a stern look on their face. “That’s enough,” they said, addressing the player. “We don’t tolerate that kind of behavior here. If you can’t respect others’ identities, then maybe this isn’t the game for you.”</p> <p>The player sulked away, muttering under their breath. Mint breathed a sigh of relief, grateful that the encounter was over. As he walked away, Mint couldn’t help but feel shaken. It was a painful reminder that not everyone would accept them for who they were, even in the Virtual World.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/04-mint/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/04-mint/index.astro";
const $$url = "/topics/stories/originals/virtual-world/commands/04-mint/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
