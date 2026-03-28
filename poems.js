// ── Musings in the Margins — poem data ──────────────────────────────────────
//
// To add a poem: copy one of the poem blocks below and paste it before the
// closing bracket. Order here = reading order in the chapbook.
//
// To edit a poem: find it by title and change the text between the backticks.
// Line breaks and blank lines are preserved exactly as written.
//
// To hide a poem without deleting it, add hidden: true to the block:
//     { type: 'poem', hidden: true, title: 'draft', text: `...` }
//
// The epigraph block at the top can also be edited freely.
// ────────────────────────────────────────────────────────────────────────────

const POEMS_DATA = [
    {
        type: 'epigraph',
        text: `The tangerine I am eating is me. The mustard greens I am planting are me. I plant with all my heart and mind. I clean this teapot with the kind of attention I would have were I giving the Buddha or Jesus a bath. Nothing should be treated more carefully than anything else. In mindfulness, compassion, irritation, mustard green plant, and teapot are all sacred.`,
        attribution: 'Thich Nhat Hanh'
    },
    {
        type: 'poem',
        title: 'hugs from behind',
        text: `i like it when my doors open
something about an open egress
letting in the good air and energy
the smell of wet trees and the fading echoes of deer at play

im watching the fly
listening really
he buzzes about me
above my bed and my desk
you know that sound when he bumps into a window
or when he touches down somewhere new and the noise ends abruptly
we size each other up before he taunts me
with his freedom of flight 
a haughty buzz buzz
he throws up on everything he touches, its gross

i wonder what he thinks of me
last nights dishes still in the sink
this guys disgusting, he wont mind if i puke all over
he wont even notice
or am i his higher power?
my home a garden of eden
my sink a cornucopia
his buzzes songs of holy gratitude 
maybe his flittering about me is like 
when my lover puts her arms around me from behind 
to say hi
i love you

i like it when my doors open
even if a fly makes his way in`
    },

    {
        type: 'poem',
        title: 'earnestness',
        text: `earnestness is like honesty
but while honesty is a descriptor
he is honest or that was honest
earnestness is a way of being
earnestness is a spirit
its the innocent proposition of self to life
to be earnest is not to be faultless
in fact being faulty is essential to being earnest

when i made a mess of the garden
the flowers trampled, the water system discombobulated
i was chasing away the deer you complain about
the ones that arrive with the spring and take its flowers 

my friend is earnest
its the best way to describe him
he is a bit oafish, physically speaking
the way a looming and sturdy guy can swing about with his hands 
at times imprecise
in a lovable way
youll enlist yourself in an adventure of his 
knowing his selling 
is half the fun
its the picture hes painted 
of the adventure well get up to 
because
youll run out of gas
and there wont be much food
and youll do half as much as half of what you imagined youd do when you signed up
but youll feel twice as spirited and have two times that as much fun 
as you imagined youd have when you did the same

honestly itll be an earnest attempt at a grand time
so why not laugh
were out on the water
and all out of gas`
    },

    {
        type: 'poem',
        title: 'consciousness of stream',
        text: `ive been here before
the road is wider and the scenery isnt the same as the first few times
i see my old neighbors have moved on
life and death the cycle that knows no escape

in fact, the last time i was here it was right before i was whisked away 
into the wild blue yonder
where i spent some time and got as far as the indies

the light was better over there
the sand a fine silky texture 
it moved like smoke does
undulating wispily
before the night and the smoke become one

i made it onto land where locals there revered me like a god
it was a nice place to be and a nice treatment at that

i befriended the plants while i lived in their rice patties
i watched old villagers farming exhaustively
it was backbreaking work

from there i came with the rice to the city
i moved from kitchen to kitchen
table to table
what flavors i met
sweet and sour
smells of unimaginable variety

then i was flushed back out to sea
adrift again
never staying in one place for too long before a warming air lifted me high
higher and higher i soared 
farther and wider

there were many of us together riding that warm air
joined as one
some of us came 
some of us went 
wherever that would be

we few remaining barreled towards the coast
our shared ride became a tumbling morass
to batter the land from above

we struck the beaches first
further waves riddled the mountainside

thats where i ended up

slowly i slid down its slope
to where ive been before
ever closer 
back 
into the wild blue yonder`
    },
	{
        type: 'poem',
        hidden: true,
        title: 'just for you',
        text: `i have kisses for you
sweet delicate ones for your lips
big juicy ones 
tonguey ones slipping inside your mouth
breathy ones of heat on heat

my heart open to you
completely 

my spirit bare to you
forever 

yes i have kisses for you
just enough

infinity and one`
    },
    {
        type: 'poem',
        title: 'right twice a day',
        text: `hey
do you have the time

why let me see

ah
would you look at that


its still now`
    },
{
        type: 'poem',
        hidden: true,
        title: 'bridge road',
        text: `oh sun
how many mornings have you greeted life with light
how many have felt your warmth and energy

good morning sweetie
i love you

can you sense
the intoxicating smell of bacon
the softness of a grey bathrobe
the texture of oj freshly squeezed
the taste of oreo os cereal flavored milk
the joy of sundays colored comics

mom 
to me you are the morning sun

good morning sweetie
i love you`
    },

    {
        type: 'poem',
        title: 'highway 1',
        text: `morning coffee
overnight oats
tommy bahama chair

black mountain
tomales bay
i imagine you over there

when you look west do you think of me too
of our nights with whales and frogs and fires

i think i know the way blindfolded

past the fern i knock on your door
warmth and butterflies

your familiar scent
your soft skin
your warm embrace

can i stay here and never let this moment go`
    },
];
