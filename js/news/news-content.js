const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(queryString)
const titleUrl = urlParams.get("id");
// console.log(titleUrl);
if (titleUrl === "theory-bigbang") {
  const news = `
        <div class="content-title">
            <h2>What is BigBang Theory?</h2>
        </div>
        <small class="text-muted">by Elizabeth Howell. May 18, 2021</small>
        <div class="answer-box">
            <div class="short-answer">
             <span>The Short Answer:</span>
            </div>
            <span>The big bang is how astronomers explain the way the universe began. It is the idea that the universe began as just a single point, then expanded and stretched to grow as large as it is right now—and it is still stretching!</span>
        </div>
        <div class="article-img justify-content-center">
            <img src="https://cdn.mos.cms.futurecdn.net/MjcT2kKGEWbcDFHvSZrLsM-970-80.jpg.webp">
        </div>
        <small class="text-muted">A 2013 map of the background radiation left over from the Big Bang, taken by the ESA's Planck spacecraft, captured the oldest light in the universe. This information helps astronomers determine the age of the universe. (Image credit: ESA and the Planck Collaboration.)</small>

        <div class="content-theory">
            <span>The Big Bang Theory is the leading explanation about how the universe began. At its simplest, it says the universe as we know it started with an infinitely hot, infinitely dense singularity, then inflated — first at unimaginable speed, and then at a more measurable rate — over the next 13.8 billion years to the cosmos that we know today.<br /><br />Because current instruments don't allow astronomers to literally peer back at the universe's birth, much of what we understand about the Big Bang Theory comes from mathematical formulas and models. Astronomers can, however, see the \"echo\" of the expansion through a phenomenon known as the cosmic microwave background.<br /><br />While the majority of the astronomical community accepts the theory, there are some theorists who have alternative explanations besides the Big Bang — such as eternal inflation or an oscillating universe.<br /><br />The phrase \"Big Bang Theory\" has been popular among astrophysicists for decades, but it hit the mainstream in 2007 when a comedy show with the same name premiered on CBS. The show followed the home and academic life of several researchers, including physicists, an astrophysicist and an engineer, and ended in 2019. <br /><br /><b class="strong-content">THE FIRST SECOND, AND THE BIRTH OF LIGHT</b><br /><br />Around 13.7 billion years ago, everything we know of was an infinitesimally small singularity, a point of infinite denseness and infinite heat. Then, explosive expansion began, ballooning our universe outwards faster than the speed of light. This was a period of cosmic inflation that lasted mere fractions of a second — about 10^-32 of a second, according to physicist Alan Guth’s 1980 theory that changed the way we think about the Big Bang forever. <br /><br />When cosmic inflation came to a sudden and still-mysterious end, the more classic descriptions of the Big Bang took hold. A flood of matter and radiation, known as “reheating,” began the process of populating our universe with the stuff we know today -- particles, atoms, stars, galaxies and so on.<br /><br />This was all still within the first second after the universe began, when the temperature of everything was about 10 billion degrees Fahrenheit (5.5 billion Celsius), according to NASA. The cosmos now contained a vast array of fundamental particles such as neutrons, electrons and protons -- the eventual building blocks or raw material for everything we see today.<br /><br />This early soup would have been impossible to look at, because light could not carry inside of it. \"The free electrons would have caused light (photons) to scatter the way sunlight scatters from the water droplets in clouds,\" NASA stated. Over time, however, the free electrons met up with nuclei and created neutral atoms. This allowed light to shine through about 380,000 years after the Big Bang.<br /><br />Sometimes called the \"afterglow\" of the Big Bang, this light is more properly known as the cosmic microwave background (CMB). It was first predicted by Ralph Alpher and other scientists in 1948, but was found only by accident almost 20 years later.<br /><br />Arno Penzias and Robert Wilson, both of Bell Telephone Laboratories in Murray Hill, New Jersey, were building a radio receiver in 1965 and picking up higher-than-expected temperatures, according to NASA. At first, they thought the anomaly was due to pigeons and their dung, but even after they cleaned up the mess and killed the pigeons that tried to roost inside the antenna, the anomaly persisted.<br /><br />Simultaneously, a Princeton University team (led by Robert Dicke) was trying to find evidence of the CMB, and realized that Penzias and Wilson had stumbled upon it. The two groups each published papers in the Astrophysical Journal in 1965.<br /><br /><b class="strong-content">RECONSTRUCTING THE UNIVERSE'S BABY PICTURES</b><br /><br />In one case, cosmologists are pressing rewind to reach the first instant after the Big Bang by simulating 4,000 versions of the current universe on a massive supercomputer. <br /><br />\"We are trying to do something like guessing a baby photo of our universe from the latest picture,\" study leader Masato Shirasaki, a cosmologist at the National Astronomical Observatory of Japan (NAOJ), wrote in an email to Live Science. <br /><br />With information about the universe as we know it today, the researchers on this 2021 study worked to compare their understanding of how gravitational forces interacted in the primordial universe with their thousands of computer-modeled universes. If they could successfully predict the starting conditions of their virtual universes, they could have more trust in their ability to predict what our own universe looked like back at the beginning. <br /><br />Other researchers choose a different path to interrogate our universe's beginnings, investigating the split between matter and antimatter. One 2020 study, not yet peer-reviewed, proposed that the imbalance in amount of matter and antimatter is related to the universe's vast quantities of dark matter, an unknown substance that exerts influence over gravity and yet doesn't interact with light. Crucial moments after the Big Bang may have \"kicked\" the universe into making more matter than its inverse, antimatter, which then could have led to the formation of dark matter.<br /><br /><b class="strong-content">THE AGE OF THE UNIVERSE</b><div class="article-img justify-content-center article-img-margin"><img src="https://cdn.mos.cms.futurecdn.net/c2P4QVUagTgnzUQ6L3YPRM-970-80.jpg"></div><br /><br /><small class="text-muted">Artist's impression of the European Space Agency's Planck spacecraft. Planck's main goal is to study the Cosmic Microwave Background — the relic radiation left over from the Big Bang.  (Image credit: ESA/C. Carreau)</small><br /><br />The cosmic microwave background has been observed on many missions. One of the most famous space-faring missions was NASA's Cosmic Background Explorer (COBE) satellite, which mapped the sky in the 1990s.<br /><br />Several other missions have followed in COBE's footsteps, such as the BOOMERanG experiment (Balloon Observations of Millimetric Extragalactic Radiation and Geophysics), NASA's Wilkinson Microwave Anisotropy Probe (WMAP) and the European Space Agency's Planck satellite.<br /><br />Planck's observations, first released in 2013, mapped the background in unprecedented detail and revealed that the universe was older than previously thought: 13.82 billion years old, rather than 13.7 billion years old. The research observatory's mission is ongoing and new maps of the CMB are released periodically.<br /><br />The maps give rise to new mysteries, however, such as why the Southern Hemisphere appears slightly redder (warmer) than the Northern Hemisphere. The Big Bang Theory says that the CMB would be mostly the same, no matter where you look.<br /><br />Examining the CMB also gives astronomers clues as to the composition of the universe. Researchers think most of the cosmos is made up of matter and energy that cannot be \"sensed\" with our conventional instruments, leading to the names \"dark matter\" and \"dark energy.\" Only 5% of the universe is made up of matter such as planets, stars and galaxies.<br /><br /><b class=strong-content>FAINT SIGNALS OF THE UNIVERSE'S INFLATION</b><br /><br />While astronomers could see the universe's beginnings, they've also been seeking out proof of its rapid inflation using gravitational waves, tiny perturbations in space-time that ripple outwards from great disturbances like, for instance, two black holes colliding, or the birth of the universe.<br /><br />Theory says that in the first second after the universe was born, our cosmos ballooned faster than the speed of light. (That, by the way, does not violate Albert Einstein's speed limit. He once said that light speed is the fastest anything can travel within the universe — but that statement did not apply to the inflation of the universe itself.)<br /><br />As the universe expanded, it created the CMB and a similar \"background noise\" made up of gravitational waves that, like the CMB, should be a sort of static detectable from all parts of the sky. Those gravitational waves, according to the LIGO Scientific Collaboration, produced a theorized barely-detectable polarization, one type of which is called \"B-modes.\"<br /><br />In 2014, astronomers said they had found evidence of B-modes using an Antarctic telescope called \"Background Imaging of Cosmic Extragalactic Polarization,\" or BICEP2.<br /><br />\"We're very confident that the signal that we're seeing is real, and it's on the sky,\" lead researcher John Kovac, of the Harvard-Smithsonian Center for Astrophysics, told Space.com in March 2014.<br /><br />But by June, the same team said that their findings could have been altered by galactic dust getting in the way of their field of view. That hypothesis was supported by new results from the Planck satellite.<br /><br />By January 2015, researchers from both teams working together \"confirmed that the Bicep signal was mostly, if not all, stardust,\" the New York Times said.<br /><br /><div class="article-img justify-content-center"><img src="https://cdn.mos.cms.futurecdn.net/9Aphz9GQFpxmRrzHUVe3jS-970-80.jpg"></div><small class="text-muted">This graphic shows a timeline of the universe based on the Big Bang theory and inflation models. (Image credit: NASA/WMAP)</small><br /><br />Gravitational waves have now been confirmed to exist, however. These waves, which are not B-modes from the birth of the universe but rather from more recent collisions of black holes, have been detected multiple times by the Laser Interferometer Gravitational-Wave Observatory (LIGO) since 2016. As LIGO becomes more sensitive, it is anticipated that discovering black hole-related gravitational waves will be a fairly frequent event.<br /><br /><b class="strong-content">FASTER INFLATION, MULTIVERSES AND CHARTING THE START</b><br /><br />The universe is not only expanding, but expanding faster. This means that with time, nobody will be able to spot other galaxies from Earth, or any other vantage point within our galaxy.<br />
            <br />\"We will see distant galaxies moving away from us, but their speed is increasing with time,\" Harvard University astronomer Avi Loeb said in a March 2014 Space.com article.<br /><br />\"So, if you wait long enough, eventually, a distant galaxy will reach the speed of light. What that means is that even light won't be able to bridge the gap that's being opened between that galaxy and us. There's no way for extraterrestrials on that galaxy to communicate with us, to send any signals that will reach us, once their galaxy is moving faster than light relative to us.\"<br /><br />Some physicists also suggest that the universe we experience is just one of many. In the \"multiverse\" model, different universes would coexist with each other like bubbles lying side by side. The theory suggests that in that first big push of inflation, different parts of space-time grew at different rates. This could have carved off different sections — different universes — with potentially different laws of physics.<br /><br />\"It's hard to build models of inflation that don't lead to a multiverse,\" Alan Guth, a theoretical physicist at the Massachusetts Institute of Technology, said during a news conference in March 2014 concerning the gravitational waves discovery. (Guth is not affiliated with that study.)<br /><br />\"It's not impossible, so I think there's still certainly research that needs to be done. But most models of inflation do lead to a multiverse, and evidence for inflation will be pushing us in the direction of taking [the idea of a] multiverse seriously.\"<br /><br />While we can understand how the universe we see came to be, it's possible that the Big Bang was not the first inflationary period the universe experienced. Some scientists believe we live in a cosmos that goes through regular cycles of inflation and deflation, and that we just happen to be living in one of these phases.<br /><br /><b class="strong-content">THE BIG BANG THEORY: MAKING SCIENTIFIC THEORY A HOUSEHOLD PHRASE</b><br /><br /><div class="article-img article-img-border justify-content-center"><img src="https://cdn.mos.cms.futurecdn.net/dKXASbzDEqiQ99XxgtcntM-970-80.jpg.webp"></div><small class="text-muted">From left, characters Howard, Leonard, Penny, Sheldon and Raj from the CBS show \"The Big Bang Theory.\" (Image credit: CBS)</small><br /><br />Running for 279 episodes over 12 seasons, the CBS show \"The Big Bang Theory\" followed a group of scientists — originally, all physicists, astrophysicists and aerospace engineers. The show explores the group's nerdy friendships, romances and squabbles in Pasadena, California. Its first season premiered on Sept. 24, 2007 and the show officially ended on May 16, 2019.<br /><br />Although the show itself didn't delve into much of the physics behind the big bang theory itself, the showrunners did hire UCLA astrophysicist David Saltzberg as a science consultant for the entire run of the show, according to Science magazine. That meant that science jargon, frequently tossed around in the show's opening scenes and sprinkled through the characters' lives, was reviewed by an actual scientist. Because the characters are immersed in academia, Saltzberg told Science, that added to the realistic portrayal of their lives.<br /><br />In addition, thanks to Saltzberg, the whiteboards in the background of labs, offices and apartments throughout the show were filled with a variety of cutting-edge and sometimes newsworthy equations and information. Over the course of the show, Saltzberg said, those whiteboards became coveted space as researchers sent him new work that they hoped might be featured there. In one episode, Saltzberg recalled, new evidence of gravitational waves was scrawled across a whiteboard that ostensibly belonged to famed physicist Steven Hawking, who also approved the text.<br /><br /><div class="article-img article-img-border justify-content-center"><img src="https://cdn.mos.cms.futurecdn.net/YqxKgs4xMDUDBn74cHHTUg-970-80.jpg.webp"></div><small class="text-muted">Veteran NASA astronaut Mike Massimino (right) poses for a photo with Big Bang Theory actor Simon Helberg and another actor during a break from filming the season finale of CBS' Big Bang Theory. (Image credit: Mike Massimino (via Twitter as @Astro_Mike))</small><br /><br />The show took some liberties with making up some new scientific concepts, and with the politics of Nobel prizes and academia, according to Fermilab physicist Don Lincoln. But in the end, Lincoln said, the thing that rang least true to him was the scene where characters were given plane tickets to visit another lab not in coach seats, where many real-life scientists scrunch up their legs, but in Economy Plus.<br /><br />Notably, several characters in the series take trips. One episode sees main characters Leonard, Sheldon, Raj and Howard set out on a research expedition to the Arctic — many physics experiments are best performed at or near the extreme environments of the poles. Another put aerospace engineer Howard on a Russian Soyuz spacecraft and, later, a model of the the International Space Station along with real-life astronaut Mike Massimino.</span>
        </div>
        
        <div class="author-box">
              <p>THE AUTHORS</p>
              <div class="text-center">
                <a href="https://twitter.com/howellspace?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">  
                <span>Elizabeth Howell</span> 
                <i class="fab fa-twitter"></i>  
                </a>  
              </div>
              
              <p class="text-justify">Elizabeth Howell is a contributing writer for Space.com who is one of the few Canadian journalists to report regularly on space exploration. She is the author or co-author of several books on space exploration. Elizabeth holds a Ph.D. from the University of North Dakota in Space Studies, and an M.Sc. from the same department. She also holds a bachelor of journalism degree from Carleton University in Canada, where she began her space-writing career in 2004. Besides writing, Elizabeth teaches communications at the university and community college level, and for government training schools. To see her latest projects, follow Elizabeth on Twitter at @howellspace.</p>
            </div>

    `;
  document.querySelector("#article-content").innerHTML = news;
}
if (titleUrl === "earth-evolution") {
  const news = `
  <div class="content-title text-center title-font">
              <h2>Evolution of Earth</h2>
            </div>
            <span class="text-center">The evolution of this planet and its atmosphere gave rise to life, which shaped
              Earth's subsequent development. Our future lies in interpreting this geologic past and considering what
              changes--good and bad--may lie ahead</span>
            <div class="divider"></div>
            <small class="text-muted text-center">By Claude J. Allgre, Stephen H. Schneider on July 1, 2005</small>
            <div class="content-earth">
              <p><b>Like the lapis lazuli gem it resembles, the blue, cloud-enveloped planet the we recognize
                  immediately from satellite pictures seems remarkably stable.</b> Continents and oceans, encircled by
                an oxygen-rich atmosphere, support familiar life-forms. Yet this constancy is an illusion produced by
                the human experience of time. Earth and its atmosphere are continuously altered. Plate tectonics shift
                the continents, raise mountains and move the ocean floor while processes not fully understood alter the
                climate.

                <br /><br />Such constant change has characterized Earth since its beginning some 4.5 billion years ago.
                From the outset, heat and gravity shaped the evolution of the planet. These forces were gradually joined
                by the global effects of the emergence of life. Exploring this past offers us the only possibility of
                understanding the origin of life and, perhaps, its future.

                <br /> <br /> Scientists used to believe the rocky planets, including Earth, Mercury, Venus and Mars,
                were created by the rapid gravitational collapse of a dust cloud, a deation giving rise to a dense orb.
                In the 1960s the Apollo space program changed this view. Studies of moon craters revealed that these
                gouges were caused by the impact of objects that were in great abundance about 4.5 billion years ago.
                Thereafter, the number of impacts appeared to have quickly decreased. This observation rejuvenated the
                theory of accretion postulated by Otto Schmidt. The Russian geophysicist had suggested in 1944 that
                planets grew in size gradually, step by step.
              </p>
              <div class="article-img justify-content-center">
                <img src="https://slideplayer.com/8244246/33/images/slide_1.jpg" alt="">
              </div>
              <p>
                According to Schmidt, cosmic dust lumped together to form particulates, particulates became gravel,
                gravel became small balls, then big balls, then tiny planets, or planetesimals, and, nally, dust became
                the size of the moon. As the planetesimals became larger, their numbers decreased. Consequently, the
                number of collisions between planetesimals, or meteorites, decreased. Fewer items available for
                accretion meant that it took a long time to build up a large planet. A calculation made by George W.
                Wetherill of the Carnegie Institution of Washington suggests that about 100 million years could pass
                between the formation of an object measuring 10 kilometers in diameter and an object the size of Earth.

                <br /><br />The process of accretion had significant thermal consequences for Earth, consequences that
                forcefully directed its evolution. Large bodies slamming into the planet produced immense heat in its
                interior, melting the cosmic dust found there. The resulting furnace--situated some 200 to 400
                kilometers underground and called a magma ocean--was active for millions of years, giving rise to
                volcanic eruptions. When Earth was young, heat at the surface caused by volcanism and lava ows from the
                interior was intensified by the constant bombardment of huge objects, some of them perhaps the size of
                the moon or even Mars. No life was possible during this period.

                <br /><br />Beyond clarifying that Earth had formed through accretion, the Apollo program compelled
                scientists to try to reconstruct the subsequent temporal and physical development of the early Earth.
                This undertaking had been considered impossible by founders of geology, including Charles Lyell, to whom
                the following phrase is attributed: No vestige of a beginning, no prospect for an end. This statement
                conveys the idea that the young Earth could not be re-created, because its remnants were destroyed by
                its very activity. But the development of isotope geology in the 1960s had rendered this view obsolete.
                Their imaginations red by Apollo and the moon ndings, geochemists began to apply this technique to
                understand the evolution of Earth.

                <br /><br />Dating rocks using so-called radioactive clocks allows geologists to work on old terrains
                that do not contain fossils. The hands of a radioactive clock are isotopes--atoms of the same element
                that have different atomic weights--and geologic time is measured by the rate of decay of one isotope
                into another [see "The Earliest History of the Earth," by Derek York; Scientific American, January
                1993]. Among the many clocks, those based on the decay of uranium 238 into lead 206 and of uranium 235
                into lead 207 are special. Geochronologists can determine the age of samples by analyzing only the
                daughter product--in this case, lead--of the radioactive parent, uranium.<br /><br />
                <br /><br />
                <b class="strong-content">Stories from gases</b>
                <br /><br />ONE OF THE MOST important aspects of the planet's evolution is the formation of the
                atmosphere, because it is this assemblage of gases that allowed life to crawl out of the oceans and to
                be sustained. Researchers have hypothesized since the 1950s that the terrestrial atmosphere was created
                by gases emerging from the interior of the planet. When a volcano spews gases, it is an example of the
                continuous outgassing, as it is called, of Earth. But scientists have questioned whether this process
                occurred suddenly--about 4.4 billion years ago when the core differentiated--or whether it took place
                gradually over time.

                <br /><br />To answer this question, Allègre and his colleagues studied the isotopes of rare gases.
                These gases--including helium, argon and xenon--have the peculiarity of being chemically inert, that is,
                they do not react in nature with other elements. Two of them are particularly important for atmospheric
                studies: argon and xenon. Argon has three isotopes, of which argon 40 is created by the decay of
                potassium 40. Xenon has nine, of which xenon 129 has two different origins. Xenon 129 arose as the
                result of nucleosynthesis before Earth and solar system were formed. It was also created from the decay
                of radioactive iodine 129, which does not exist on Earth anymore. This form of iodine was present very
                early on but has died out since, and xenon 129 has grown at its expense.

                <br /><br />Like most couples, both argon 40 and potassium 40 and xenon 129 and iodine 129 have stories
                to tell. They are excellent chronometers. Although the atmosphere was formed by the outgassing of the
                mantle, it does not contain any potassium 40 or iodine 129. All argon 40 and xenon 129, formed in Earth
                and released, are found in the atmosphere today. Xenon was expelled from the mantle and retained in the
                atmosphere; therefore, the atmosphere-mantle ratio of this element allows us to evaluate the age of
                differentiation. Argon and xenon trapped in the mantle evolved by the radioactive decay of potassium 40
                and iodine 129. Thus, if the total outgassing of the mantle occurred at the beginning of Earths
                formation, the atmosphere would not contain any argon 40 but would contain xenon 129.

                <br /><br />The major challenge facing an investigator who wants to measure such ratios of decay is to
                obtain high concentrations of rare gases in mantle rocks because they are extremely limited.
                Fortunately, a natural phenomenon occurs at mid-ocean ridges during which volcanic lava transfers some
                silicates from the mantle to the surface. The small amounts of gases trapped in mantle minerals rise
                with the melt to the surface and are concentrated in small vesicles in the outer glassy margin of lava
                ows. This process serves to concentrate the amounts of mantle gases by a factor of 104 or 105.
                Collecting these rocks by dredging the seaoor and then crushing them under vacuum in a sensitive mass
                spectrometer allows geochemists to determine the ratios of the isotopes in the mantle. The results are
                quite surprising. Calculations of the ratios indicate that between 80 and 85 percent of the atmosphere
                was outgassed during Earths rst one million years; the rest was released slowly but constantly during
                the next 4.4 billion years.

                <br /><br />The composition of this primitive atmosphere was most certainly dominated by carbon dioxide,
                with nitrogen as the second most abundant gas. Trace amounts of methane, ammonia, sulfur dioxide and
                hydrochloric acid were also present, but there was no oxygen. Except for the presence of abundant water,
                the atmosphere was similar to that of Venus or Mars. The details of the evolution of the original
                atmosphere are debated, particularly because we do not know how strong the sun was at that time. Some
                facts, however, are not disputed. It is evident that carbon dioxide played a crucial role. In addition,
                many scientists believe the evolving atmosphere contained sufficient quantities of gases such as ammonia
                and methane to give rise to organic matter.

                <br /><br />Still, the problem of the sun remains unresolved. One hypothesis holds that during the
                Archean eon, which lasted from about 4.5 billion to 2.5 billion years ago, the suns power was only 75
                percent of what it is today. This possibility raises a dilemma: How could life have survived in the
                relatively cold climate that should accompany a weaker sun? A solution to the faint early sun paradox,
                as it is called, was offered by Carl Sagan and George Mullen of Cornell University in 1970. The two
                scientists suggested that methane and ammonia, which are very effective at trapping infrared radiation,
                were quite abundant. These gases could have created a super-greenhouse effect. The idea was criticized
                on the basis that such gases were highly reactive and have short lifetimes in the atmosphere.
                <br /><br />
                <b class="strong-content">Oxygen from algaes</b>
                <br /><br />THE ISSUE OF CARBON remains critical to how life inuenced the atmosphere. Carbon burial is a
                key to the vital process of building up atmospheric oxygen concentrations--a prerequisite for the
                development of certain life-forms. In addition, global warming is taking place now as a result of humans
                releasing this carbon. For one billion or two billion years, algae in the oceans produced oxygen. But
                because this gas is highly reactive and because there were many reduced minerals in the ancient
                oceans--iron, for example, is easily oxidized--much of the oxygen produced by living creatures simply
                got used up before it could reach the atmosphere, where it would have encountered gases that would react
                with it.
                <br /><br />
                Even if evolutionary processes had given rise to more complicated life-forms during this anaerobic era,
                they would have had no oxygen. Furthermore, un ltered ultraviolet sunlight would have likely killed them
                if they left the ocean. Researchers such as Walker and Preston Cloud, then at the University of
                California at Santa Barbara, have suggested that only about two billion years ago, after most of the
                reduced minerals in the sea were oxidized, did atmospheric oxygen accumulate. Between one billion and
                two billion years ago oxygen reached current levels, creating a niche for evolving life.
                <br /><br />
                By examining the stability of certain minerals, such as iron oxide or uranium oxide, Holland has shown
                that the oxygen content of the Archean atmosphere was low before two billion years ago. It is largely
                agreed that the present-day oxygen content of 20 percent is the result of photosynthetic activity.
                Still, the question is whether the oxygen content in the atmosphere increased gradually over time or
                suddenly. Recent studies indicate that the increase of oxygen started abruptly between 2.1 billion and
                2.03 billion years ago and that the present situation was reached 1.5 billion years ago.
                <br /><br />
                The presence of oxygen in the atmosphere had another major bene t for an organism trying to live at or
                above the surface: it ltered ultraviolet radiation. Ultraviolet radiation breaks down many
                molecules--from DNA and oxygen to the chlorouorocarbons that are implicated in stratospheric ozone
                depletion. Such energy splits oxygen into the highly unstable atomic form O, which can combine back into
                O2 and into the very special molecule O3, or ozone. Ozone, in turn, absorbs ultraviolet radiation. It
                was not until oxygen was abundant enough in the atmosphere to allow the formation of ozone that life
                even had a chance to get a root-hold or a foothold on land. It is not a coincidence that the rapid
                evolution of life from prokaryotes (single-celled organisms with no nucleus) to eukaryotes
                (single-celled organisms with a nucleus) to metazoa (multicelled organisms) took place in the
                billion-year-long era of oxygen and ozone.
                <br /><br />
                Although the atmosphere was reaching a fairly stable level of oxygen during this period, the climate was
                hardly uniform. There were long stages of relative warmth or coolness during the transition to modern
                geologic time. The composition of fossil plankton shells that lived near the ocean oor provides a
                measure of bottom water temperatures. The record suggests that over the past 100 million years bottom
                waters cooled by nearly 15 degrees Celsius. Sea levels dropped by hundreds of meters, and continents
                drifted apart. Inland seas mostly disappeared, and the climate cooled an average of 10 to 15 degrees C.
                Roughly 20 million years ago permanent ice appears to have built up on Antarctica.
                <br /><br />
                About two million to three million years ago the paleoclimatic record starts to show signi cant
                expansions and contractions of warm and cold periods in 40,000-year or so cycles. This periodicity is
                interesting because it corresponds to the time it takes Earth to complete an oscillation of the tilt of
                its axis of rotation. It has long been speculated, and recently calculated, that known changes in
                orbital geometry could alter the amount of sunlight coming in between winter and summer by about 10
                percent or so and could be responsible for initiating or ending ice ages.
                <br /><br />
                <b class="strong-content">Drastic changes ahead</b>
                <br /><br /> IN THEIR REPORT Climate Change 2001, climate experts on the Intergovernmental Panel on Climate Change estimated that the world will warm between 1.4 and 5.8 degrees C by 2100. The mild end of that range--a warming rate of 1.4 degrees C per 100 years--is still 14 times faster than the one degree C per 1,000 years that historically has been the average rate of natural change on a global scale. Should the higher end of the range occur, then we could see rates of climatic change nearly 60 times faster than natural average conditions, which could lead to changes that many would consider dangerous. Change at this rate would almost certainly force many species to attempt to move their ranges, just as they did from the ice age/interglacial transition between 10,000 and 15,000 years ago. Not only would species have to respond to climatic change at rates 14 to 60 times faster, but few would have undisturbed, open migration routes as they did at the end of the ice age and the onset of the interglacial era. The negative effects of this significant warming--on health, agriculture, coastal geography and heritage sites, to name a few--could also be severe.

                <br />To make the critical projections of future climatic change needed to understand the fate of ecosystems on Earth, we must dig through land, sea and ice to learn as much from geologic, paleoclimatic and paleoecological records as we can. These records provide the backdrop against which to calibrate the crude instruments we must use to peer into a shadowy environmental future, a future increasingly inuenced by us.
              </p>
            </div>
            <div class="author-box">
              <p>The Author</p>
              <p class="text-justify">CLAUDE J. ALLGRE and STEPHEN H. SCHNEIDER study various aspects of Earths geologic history and its climate. Allgre is professor at the University of Paris and directs the department of geochemistry at the Paris Geophysical Institute. He is a foreign member of the National Academy of Sciences. Schneider is professor in the department of biological sciences at Stanford University and co-director of the Center for Environmental Science and Policy. He was honored with a MacArthur Prize Fellowship in 1992 and was elected to membership in the National Academy of Sciences in 2002.</p>
            </div>
  `;
  const recommend = `
    <p>Recommended</p>
  `
  document.querySelector("#article-content").innerHTML = news
  // document.querySelector(".recommended").innerHTML = recommend
}
if(titleUrl === "what-is-black-hole") {
  const news = `
  <div class="content-title">
  <h2>What Is a Black Hole?</h2>
</div>
<small class="text-muted">by Heather R. Smith|NASA. Aug 21, 2018</small>
<div class="answer-box">
  <div class="short-answer">
   <span>The Short Answer:</span>
  </div>
  <span>A black hole is an area of such immense gravity that nothing -- not even light -- can escape from it.</span>
</div>
<p>
  A black hole is a place in space where gravity pulls so much that even light can not get out. The gravity
  is so strong because matter has been squeezed into a tiny space. This can happen when a star is dying.
  <br /><br />Because no light can get out, people can't see black holes. They are invisible. Space
  telescopes with special tools can help find black holes. The special tools can see how stars that are very
  close to black holes act differently than other stars.
</p>
<div class="img-with-content">
  <div>
    <img src="http://cdn.sci-news.com/images/2021/02/image_9373-Cygnus-X-1.jpg" alt="">
  </div>
  <div class="">
    An artist's drawing a black hole named Cygnus X-1. It formed when a large star caved in. This black hole
    pulls matter from blue star beside it.<br />
    <b>Credits: NASA/CXC/M.Weiss</b>
  </div>
</div>
<p>
  <b>How Big Are Black Holes?</b>
  <br />Black holes can be big or small. Scientists think the smallest black holes are as small as just one
  atom. These black holes are very tiny but have the mass of a large mountain. Mass is the amount of matter,
  or "stuff," in an object.

  <br /><br />Another kind of black hole is called "stellar." Its mass can be up to 20 times more than the
  mass of the sun. There may be many, many stellar mass black holes in Earth's galaxy. Earth's galaxy is
  called the Milky Way.

  <br /><br />The largest black holes are called "supermassive." These black holes have masses that are more
  than 1 million suns together. Scientists have found proof that every large galaxy contains a supermassive
  black hole at its center. The supermassive black hole at the center of the Milky Way galaxy is called
  Sagittarius A. It has a mass equal to about 4 million suns and would fit inside a very large ball that
  could hold a few million Earths.
</p>
<div class="img-with-content">
  <div>
    <img
      src="https://static.scientificamerican.com/sciam/cache/file/59CB8485-EDD7-47E5-83F8314FD73BE3B9_source.jpg"
      alt="">
  </div>
  <div class="">
    An artist's drawing shows the current view of the Milky Way galaxy. Scientific evidence shows that in
    the middle of the Milky Way is a supermassive black hole.<br />
    <b>Credits: ESO/M. Kornmesser</b>
  </div>
</div>
<p>
  <b>How Do Black Holes Form?</b>
  <br /> Scientists think the smallest black holes formed when the universe began.
  <br /><br />
  Stellar black holes are made when the center of a very big star falls in upon itself, or collapses. When
  this happens, it causes a supernova. A supernova is an exploding star that blasts part of the star into
  space.
  <br /><br />
  Scientists think supermassive black holes were made at the same time as the galaxy they are
  in.<br /><br />
  <b>If Black Holes Are "Black," How Do Scientists Know They Are There?</b>
  <br />A black hole can not be seen because strong gravity pulls all of the light into the middle of the
  black
  hole. But scientists can see how the strong gravity affects the stars and gas around the black hole.
  Scientists can study stars to find out if they are flying around, or orbiting, a black hole.
  <br /><br />
  When a black hole and a star are close together, high-energy light is made. This kind of light can not be
  seen with human eyes. Scientists use satellites and telescopes in space to see the high-energy light.
</p>
<div class="img-with-content">
  <div>
    <img
      src="https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/edu_chandra_informal.jpg?itok=gcmouSQ_"
      alt="">
  </div>
  <div>
    This image of the center of the Milky Way galaxy was taken by the Chandra X-ray Observatory.
    <br />
    <b>Credits: NASA/CXC/MIT/F.K. Baganoff et al.</b>
  </div>
</div>
<p>
  <b>Could a Black Hole Destroy Earth?</b><br />
  Black holes do not go around in space eating stars, moons and planets. Earth will not fall into a black hole because no black hole is close enough to the solar system for Earth to do that.

  <br /><br />Even if a black hole the same mass as the sun were to take the place of the sun, Earth still would not fall in. The black hole would have the same gravity as the sun. Earth and the other planets would orbit the black hole as they orbit the sun now.

  <br /><br />The sun will never turn into a black hole. The sun is not a big enough star to make a black hole.
</p>
<div class="img-with-content">
  <div>
    <img
      src="https://www.nasa.gov/sites/default/files/styles/side_image/public/sgr_lg_2.jpg?itok=05qVGzHz"
      alt="">
  </div>
  <div>
    Sagittarius A* is the black hole at the center of the Milky Way galaxy.
    <br />
    <b>Credits: X-ray: NASA/UMass/D.Wang et al., IR: NASA/STScI</b>
  </div>
</div>
  `
  document.querySelector("#article-content").innerHTML = news
}
if(titleUrl ==="our-solar-system"){
  const news = `
  <div class="content-title">
  <h1>Our Solar System</h1>
 </div>
 <small>
  by NASA Solar System. August 30, 2021
 </small>
 <div class="answer-box">
   <div class="short-answer">
    <span>Our Solar System</span>
   </div>
   <span>
    <b>Why is it Called the Solar System?</b> <br/>
    There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is named the "solar system" because our Sun is named Sol, after the Latin word for Sun, "solis," and anything related to the Sun we call "solar."
   </span>
 </div>
 <p>Our planetary system is located in an outer spiral arm of the Milky Way galaxy.</p>
 <p>Our solar system consists of our star, the Sun, and everything bound to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and millions of asteroids, comets, and meteoroids. Beyond our own solar system, we have discovered thousands of planetary systems orbiting other stars in the Milky Way.</p>
 <b class="strong-content"> Explore Our Solar System in Depth</b>
 <p><br/>The planetary system we call home is located in an outer spiral arm of the Milky Way galaxy.

  <br/><br/>Our solar system consists of our star, the Sun, and everything bound to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and millions of asteroids, comets, and meteoroids.
  
  <br/><br/>Beyond our own solar system, there are more planets than stars in the night sky. So far, we have discovered thousands of planetary systems orbiting other stars in the Milky Way, with more planets being found. Most of the hundreds of billions of stars in our galaxy are thought to have planets of their own, and the Milky Way is but one of perhaps 100 billion galaxies in the universe.
  
  <br/><br/>While our planet is in some ways a mere speck in the vast cosmos, we have a lot of company out there. It seems that we live in a universe packed with planets – a web of countless stars accompanied by families of objects, perhaps some with life of their own.</p>
  <h4>Namesake</h4>
  <p>There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is named the "solar system" because our Sun is named Sol, after the Latin word for Sun, "solis," and anything related to the Sun we call "solar."</p>
  <h4>Size and Distance</h4>
  <p>Our solar system extends much farther than the eight planets that orbit the Sun. The solar system also includes the Kuiper Belt that lies past Neptune's orbit. This is a sparsely occupied ring of icy bodies, almost all smaller than the most popular Kuiper Belt Object – dwarf planet Pluto.</p>
  <div class="article-img align-items-center column">
    <img src="https://solarsystem.nasa.gov/system/internal_resources/details/original/5091_Pluto.jpeg">
    <div class="text-center">
      <small >
      NASA’s New Horizons spacecraft captured this high-resolution enhanced color view of Pluto on July 14, 2015. Credit: NASA/JHUAPL/SwRI | Full caption and image
      </small>
    </div>
  </div>
  <p>
    Beyond the fringes of the Kuiper Belt is the Oort Cloud. This giant spherical shell surrounds our solar system. It has never been directly observed, but its existence is predicted based on mathematical models and observations of comets that likely originate there.

    <br/><br/>The Oort Cloud is made of icy pieces of space debris - some bigger than mountains – orbiting our Sun as far as 1.6 light-years away. This shell of material is thick, extending from 5,000 astronomical units to 100,000 astronomical units. One astronomical unit (or AU) is the distance from the Sun to Earth, or about 93 million miles (150 million kilometers). The Oort Cloud is the boundary of the Sun's gravitational influence, where orbiting objects can turn around and return closer to our Sun.

    <br/><br/>The Sun's heliosphere doesn't extend quite as far. The heliosphere is the bubble created by the solar wind – a stream of electrically charged gas blowing outward from the Sun in all directions. The boundary where the solar wind is abruptly slowed by pressure from interstellar gases is called the termination shock. This edge occurs between 80-100 astronomical units.

    <br/><br/>Two NASA spacecraft launched in 1977 have crossed the termination shock: Voyager 1 in 2004 and Voyager 2 in 2007. Voyager 1 went interstellar in 2012 and Voyager 2 joined it in 2018. But it will be many thousands of years before the two Voyagers exit the Oort Cloud.​
  </p>
  <div><h4>Moon</h4></div>
  <p>
    There are more than 200 known moons in our solar system and several more awaiting confirmation of discovery. Of the eight planets, Mercury and Venus are the only ones with no moons. The giant planets Jupiter and Saturn lead our solar system’s moon counts. In some ways, the swarms of moons around these worlds resemble mini versions of our solar system. Pluto, smaller than our own moon, has five moons in its orbit, including the Charon, a moon so large it makes Pluto wobble. Even tiny asteroids can have moons. In 2017, scientists found asteroid 3122 Florence had two tiny moons.
  </p>
  <div class="article-img align-items-center column">
    <img src="https://solarsystem.nasa.gov/internal_resources/442">
    <div class="text-center">
      <small >
        These six narrow-angle color images were made from the first-ever 'portrait' of the solar system taken by Voyager 1, which was more than 4 billion miles from Earth and about 32 degrees above the ecliptic. Credit: NASA Planetary Photojournal
      </small>
    </div>
  </div>
  <h4>Formation</h4>
  <p>Our solar system formed about 4.5 billion years ago from a dense cloud of interstellar gas and dust. The cloud collapsed, possibly due to the shockwave of a nearby exploding star, called a supernova. When this dust cloud collapsed, it formed a solar nebula – a spinning, swirling disk of material.

    <br/><br/>At the center, gravity pulled more and more material in. Eventually, the pressure in the core was so great that hydrogen atoms began to combine and form helium, releasing a tremendous amount of energy. With that, our Sun was born, and it eventually amassed more than 99% of the available matter.
    
    <br/><br/> Matter farther out in the disk was also clumping together. These clumps smashed into one another, forming larger and larger objects. Some of them grew big enough for their gravity to shape them into spheres, becoming planets, dwarf planets, and large moons. In other cases, planets did not form: the asteroid belt is made of bits and pieces of the early solar system that could never quite come together into a planet. Other smaller leftover pieces became asteroids, comets, meteoroids, and small, irregular moons.</p>

  <h4>Structure</h4>
  <p>The order and arrangement of the planets and other bodies in our solar system is due to the way the solar system formed. Nearest to the Sun, only rocky material could withstand the heat when the solar system was young. For this reason, the first four planets – Mercury, Venus, Earth, and Mars – are terrestrial planets. They are all small with solid, rocky surfaces.

    <br/><br/>Meanwhile, materials we are used to seeing as ice, liquid, or gas settled in the outer regions of the young solar system. Gravity pulled these materials together, and that is where we find gas giants Jupiter and Saturn, and the ice giants Uranus and Neptune.</p>
  `
  document.querySelector("#article-content").innerHTML = news
}
// topMainNews
const main = new Request("./js/news/json/newsContent.json");
fetch(main)
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>

                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.content}</p>
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
    const recommend = `

    `
  });
// SpaceFlight
fetch("./js/news/json/space-flight.json")
  .then((response) => response.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);

    const news = `
                    <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.content}</p>
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });

// solarSystem
fetch("./js/news/json/solar-system.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.content}</p>
                
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });
// Galaxies
fetch("./js/news/json/galaxies.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.content}</p>
                
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });
// bigBang
fetch("./js/news/json/bigbang.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.content}</p>
                
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });
// blackHole
fetch("./js/news/json/black-hole.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div>
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <p >${x.content}</p>
                
                </div>
            `;
    document.querySelector("#article-content").innerHTML = news;
  });
// exoplanets
fetch("./js/news/json/exoplanet.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    x.summary.replace("\u00A0", "1");
    const news = `
                <div>
                    <h2>${x.title}</h2>
                </div>
                <small class="text-muted">${x.time}</small>
                
                <div class="summary-content">
                    <span>${x.summary}</span>
                </div>
                <div class="article-img justify-content-center">
                    <img src="${x.img}">
                </div>
                <div class="text-justify">
                <span>${x.content}</span>
                </div>
            `;
    // console.log(news);
    document.querySelector("#article-content").innerHTML = news;
  });
// Carousel
fetch("./js/news/json/carousel.json")
  .then((respond) => respond.json())
  .then((data) => {
    var x = data.find((x) => x.title.toString() === titleUrl);
    // console.log(x)
    const news = `
                    <div>
                        <h2>${x.title}</h2>
                    </div>
                    <div>
                        <span>${x.summary}</span>
                    </div>
                    <div class="article-img justify-content-center">
                        <img src="${x.img}">
                    </div>
                    <div class="text-justify">
                    <p >${x.content}</p>
                    
                    </div>
                `;
    document.querySelector("#article-content").innerHTML = news;
  });

  document.querySelector('.comment-input').addEventListener('submit', (e) => {
    const formData = new FormData(e.target);
    console.log(formData)

    // Now you can use formData.get('foo'), for example.
    // Don't forget e.preventDefault() if you want to stop normal form .submission
  });
