---
slug: "/blog/chess-analysis/"
title: "Chess Opening Analysis with a Lichess Dataset"
description: "How does knowledge of Chess Openings relate to player rating? In this analysis, I investigate the use Book Openings and Master Games with 20,000 public Lichess Games."
image: "/assets/img/post-2-cover.jpg"
imageAlt: "Pawns on a Chess board"
author: "Adam Comer"
date: 2021-02-16T03:30:17+0000
postDate: 2021-02-16T03:30:17+0000
---

## Introduction
Since the start of the pandemic, I found a new interest in the game Chess and have been an avid player online in my free time. As a student in statistics, I’ve always wanted to apply techniques I’ve learned in class to the game. Luckily, I’ve been assigned a “Professional Development” assignment from my STA303 Professor to build or write something to enhance my image as a statistician. 

For this project, I am going to look at the relationship between knowledge in the opening phase of the game and rating of players. Many chess players will refer to this as “Opening Theory” or “Theory.” Before starting this project, my hypothesis was players memorize more Opening Theory to give themselves an advantage as they leave the opening phase of the game. As a player, this felt intuitive to me because I found myself memorizing moves after checking my games with a Chess Engine or searching a database for similar games played by Master level players. This project will test if players online are doing the same thing with real chess game data from Lichess.

**Disclaimer:** I’m not a strong Chess player. And you can verify this by looking at [my Chess.com profile and games](https://www.chess.com/member/adambcomer). That being said, I’m not going to be analyzing individual games or positions here. Instead, I’m going to base my analysis on public games from Lichess and games played by Masters. 


## Data

First, I need to get some chess games data. For this type of analysis, I need games from players of all rating ranges. [Lichess](https://lichess.org/), a open source Chess server, is nice enough to give [their data](https://database.lichess.org/#standard_games) back to the community. I used the set of games from April 2017 because it was the smallest dataset with timestamps(Although, I never used them). 

To analyzing openings, I needed an Opening Book to compare with my games. This was a lot harder than I thought it was going to be. Many books are proprietary or only come in physical form. After searching for a few days, I eventually found some [opening books in a nice machine readable format](https://github.com/niklasf/eco). Unfortunately, the names were all different but I worked around that by matching the moves from the game to the moves in the book.

Initially, I stopped my data collection here. But as did the further analysis, I realized my definition of “Opening Theory” was extremely limited. Most if not all strong players have opening preparations that extend far beyond the 4-6 moves in a standard opening book. In the recent Opera Euro Rapid Finals, [Wesley So attributes his loss in round 2 to missing the move 21. Qxe4](https://www.chess.com/news/view/opera-euro-rapid-chess-finals-day-1). I wanted to look deeper into these online games and see how players at every level are copying these Masters. To do this, I used a [dataset of Master Level games](https://rebel13.nl/download/data.html) to check for similarities.

Due to computational limits of my laptop, I used the first 200,000 master games to construct a [Trie](https://en.wikipedia.org/wiki/Trie) of all of the moves. Effectivity, I was treating the search of opening moves as substring search. This tree of games and their moves is referred to as the Master Game Index.

To build my nice DataFrame, I extracted the first 20,000 Blitz and Bullet games from the Lichess Dataset and counted the number of moves that matched the Opening Book and the Master Game Index. I took the header information in from the games, fields such as player rating or time format, and made them into columns. A small preview can be seen below and the full dataset link can be found in the Appendix.

**Aside:** This project involved a lot more Data Engineering then I anticipated. As a student, I seldomly come across projects that force you efficiently index and search these large dataset. If you teach a 300+ level statistics class, try giving an assignment that has Data Engineering sections. Most data that is public or in the workplace was not formatted for your specific use case. And teaching students how to process, index, and integrate multiple data sources with varying formats will pay dividends in future careers.

```python
games = pd.read_csv('data/games.csv', index_col='ID', delimiter=',')
games.head()
```

```
                             GameType          White  WhiteElo  WhiteRatingDiff         Black  BlackElo  BlackRatingDiff Result                                            Opening  ECO TimeControl  OpeningMoves  MasterMoves
ID                                                                                                                                                                                                                            
https://lichess.org/tGpzk7yJ    Blitz   calvinmaster      2186                4  dislikechess      1907               -4    1-0          King's Gambit Accepted: Schallopp Defense  C34       180+0             6            8
https://lichess.org/LzvBtZ93   Bullet    Gregster101      1385               10     flavietta      1339               -9    1-0       King's Gambit Accepted: King's Knight Gambit  C34       120+1             5            9
https://lichess.org/TR5upkT0    Blitz          Napen      1905                8       Volcoom      1836               -9    1-0  Ruy Lopez: Schliemann Defense, Schoenemann Attack  C63       180+0             7           18
https://lichess.org/UHBSjQt4   Bullet   bRoCk-LeSnAr      1670              -21        czarny      1812                6    0-1                                  Hungarian Opening  A00       120+1             1            1
https://lichess.org/Qh8ynBVM    Blitz  farhad_karaji       988               -7     micro-dog      1145                7    0-1                               Van't Kruijs Opening  A00       180+0             1            5

[20000 rows x 12 columns]
```


## Analysis

This sections is split into two parts for the two most popular formats of chess online: Blitz and Bullet Chess. Blitz Chess games usually allocate 3 or 5 minutes per player and Bullet Chess games usually allocate 1 or 2 minutes per player. All steps of the analysis are repeated for both game types.

### Blitz

First, the games are filtered to only Blitz matches. This leaves 13,150 games in the dataset.

```python
# 13150 Games remaining
blitz_games = games[games['GameType'] == 'Blitz']
```

Next, the distribution of games needs to be checked. Ideally, the players ratings should be representative of the population, which has a nice bell-shaped curve.


```python
fig, ax = plot.subplots()
plot.hist(blitz_games['WhiteElo'], bins=50, color='#0062ff')

plot.title('Blitz ELO with White')
ax.set_xlabel('Player ELO')
ax.set_ylabel('Games')

plot.show()
```
![Histogram of ELO with the White Pieces for Blitz games](/assets/img/chess-analysis/BlitzWhiteElo.jpeg)

For the player with the white pieces, this sample of games looks representative.

```python
fig, ax = plot.subplots()
plot.hist(blitz_games['BlackElo'], bins=50, color='#0062ff')

plot.title('Blitz ELO with Black')
ax.set_xlabel('Player ELO')
ax.set_ylabel('Games')

plot.show()
```
![Histogram of ELO with the Black Pieces for Blitz games](/assets/img/chess-analysis/BlitzBlackElo.jpeg)

Again, for the player with the black pieces, this sample of games looks representative.

Next, the games should be balanced. That is, the ratings between the players should be similar. Games where the difference is too large will guarantee one side will win, potentially breaking future analysis. 

```python
fig, ax = plot.subplots()
plot.hist(blitz_games['WhiteElo'] - blitz_games['BlackElo'], bins=50, color='#0062ff')

plot.title('Blitz ELO Difference')
ax.set_xlabel('ELO Difference')
ax.set_ylabel('Games')

plot.show()
```
![Histogram of of the ELO Difference between the Players for Blitz games](/assets/img/chess-analysis/BlitzPlayerDifference.jpeg)

Most of the games fall in the fair range of ±200 rating points. There are a few outliers bleeding into the ±500 point range.


```python
# 11562 Games remaining
blitz_games = blitz_games[abs(blitz_games['WhiteElo'] - blitz_games['BlackElo']) < 200]
```

After clearing out the games with a wide rating differential, there are 11,562 games remaining in this dataset.

Now, I will look at the relationship between Opening Knowledge and player rating.

```python
agg = blitz_games.groupby(['OpeningMoves']).agg(['count'])

fig, ax = plot.subplots()
plot.bar(agg.index, agg[('Opening', 'count')], color='#0062ff')

plot.title('Blitz Games # of Book Moves')
ax.set_xlabel('# of Book Moves')
ax.set_ylabel('Games')

plot.show()
```
![Bar graph of the number of games played grouped by the number of Book moves featured for Blitz games](/assets/img/chess-analysis/BlitzBookMoves.jpeg)

Grouping by the number of Book Moves featured, a nice gradually descending distribution is apparent.

Next, I will do a regression analysis of the rating of the players and the number of Book moves featured in a game.

```python
blitz_games['ELOAverage'] = (blitz_games['WhiteElo'] + blitz_games['BlackElo']) / 2

res = stats.linregress(blitz_games['OpeningMoves'], blitz_games['ELOAverage'])
```
```
Regression Results:
  slope: 12.878527255330097
  intercept: 1576.655656676459, 
  rvalue: 0.08137428579792201, 
  pvalue: 1.8927751604955526e-18, 
  stderr: 1.4670922151454777, 
  intercept_stderr: 5.938045602789431
```

```python
fig, ax = plot.subplots()
plot.title('Blitz Game ELO vs. # of Book Moves')
ax.set_xlabel('# of Book Moves')
ax.set_ylabel('Average ELO of Players')

plot.scatter(blitz_games['OpeningMoves'], blitz_games['ELOAverage'], alpha=0.05, color='#0062ff')
plot.plot(blitz_games['OpeningMoves'], res.intercept + res.slope * blitz_games['OpeningMoves'], color='#fa4d56', 
          label=f'ELO = {round(res.slope, 2)} * BookMoves + {round(res.intercept, 2)}')

plot.show()
```
![Scatter plot of Average Player ELO vs number of Book moves featured for Blitz games](/assets/img/chess-analysis/BlitzBookMovesELO.jpeg)

Looking at our regression, there is a slight positive relationship that is significant (p < 0.05) but has a small R^2 of 0.00662. I expected the variance to be high but not this high.

The first version of my analysis stopped here. After sitting on it for a few days, I realized that players don’t look at the Encyclopedia of Chess Openings for ideas, they use a database of games from Master level players. After adding this extra field, I will do a second regression on the player ratings and the number of moves from Master games featured. 

```python
fig, ax = plot.subplots()
plot.bar(agg.index, agg[('Opening', 'count')], color='#0062ff')

plot.title('Blitz Games # of Master Moves')
ax.set_xlabel('# of Book Moves')
ax.set_ylabel('Games')

plot.show()
```
![Bar graph of the number of games played grouped by the number of Master moves featured for Blitz games](/assets/img/chess-analysis/BlitzMasterMoves.jpeg)

Comparing this bar chart with the previous, players are using longer lines and more ideas from Master games than just Book moves alone. This gives us good evidence that “Opening Theory” consists of more than a 2-6 move Opening Book.

```python
res = stats.linregress(blitz_games['MasterMoves'], blitz_games['ELOAverage'])
```
```
Regression Results:
  slope: 30.674892863592703
  intercept: 1404.7621823835452
  rvalue: 0.37307786524629527
  pvalue: 0.0
  stderr: 0.7095108471201739
  intercept_stderr: 5.61993939067637
```

```python
fig, ax = plot.subplots()
plot.title('Blitz Game ELO vs. # of Master Moves')
ax.set_xlabel('# of Master Moves')
ax.set_ylabel('Average ELO of Players')

plot.scatter(blitz_games['MasterMoves'], blitz_games['ELOAverage'], alpha=0.05, color='#0062ff')
plot.plot(blitz_games['MasterMoves'], res.intercept + res.slope * blitz_games['MasterMoves'], color='#fa4d56', 
          label=f'ELO = {round(res.slope, 2)} * MasterMoves + {round(res.intercept, 2)}')

plot.show()
```
![Scatter plot of Average Player ELO vs number of Master moves featured for Blitz games](/assets/img/chess-analysis/BlitzMasterMovesELO.jpeg)

Looking at our second regression, there is a positive relationship that is significant (p < 0.05) but has a modest R^2 of 0.13919. This was the relationship I hypothesized in the introduction. 

### Bullet

For the Bullet section, I did the same analysis but the graphs and conclusions were essentially identical to the Blitz section. I included the graphs in the Appendix for completeness.

First, the games are filtered to Bullet format and the games with less than a ±200 rating differential.

```python
# 6850 Games remaining
bullet_games = games[games['GameType'] == 'Bullet']
# 5555 Games remaining
bullet_games = bullet_games[abs(bullet_games['WhiteElo'] - bullet_games['BlackElo']) < 200]
```

Next, I will do the same regressions in the Blitz Section.

```python
bullet_games['ELOAverage'] = (bullet_games['WhiteElo'] + bullet_games['BlackElo']) / 2

res = stats.linregress(bullet_games['OpeningMoves'], bullet_games['ELOAverage'])
```
```
Regression Results:
  slope: -18.938642094441818
  intercept: 1746.6965926816904
  rvalue: -0.11197971306496589
  pvalue: 5.736604103545491e-17
  stderr: 2.255306260261277
  intercept_stderr: 7.668411448527872
```

```python
fig, ax = plot.subplots()
plot.title('Bullet Game ELO vs. # of Book Moves')
ax.set_xlabel('# of Book Moves')
ax.set_ylabel('Average ELO of Players')

plot.scatter(bullet_games['OpeningMoves'], bullet_games['ELOAverage'], alpha=0.05, color='#0062ff')
plot.plot(bullet_games['OpeningMoves'], res.intercept + res.slope * bullet_games['OpeningMoves'], color='#fa4d56', 
          label=f'ELO = {round(res.slope, 2)} * BookMoves + {round(res.intercept, 2)}')

plot.show()
```
![Scatter plot of Average Player ELO vs number of Book moves featured for Bullet games](/assets/img/chess-analysis/BulletBookMovesELO.jpeg)

Initially, this regression and graph caught me off guard. Why would playing fewer book moves correlate with a higher rating? To verify this this relationship, I did a second regression of player rating and Master moves.


```python
res = stats.linregress(bullet_games['MasterMoves'], bullet_games['ELOAverage'])
```
```
Regression Results:
  slope: 8.206545855725649
  intercept: 1639.3828293657148
  rvalue: 0.09319956154540714
  pvalue: 3.4044901651001904e-12
  stderr: 1.1764901073637415
  intercept_stderr: 8.150519297257242
```

```python
fig, ax = plot.subplots()
plot.title('Blitz Game ELO vs. # of Master Moves')
ax.set_xlabel('# of Master Moves')
ax.set_ylabel('Average ELO of Players')

plot.scatter(bullet_games['MasterMoves'], bullet_games['ELOAverage'], alpha=0.05, color='#0062ff')
plot.plot(bullet_games['MasterMoves'], res.intercept + res.slope * bullet_games['MasterMoves'], color='#fa4d56', 
          label=f'ELO = {round(res.slope, 2)} * MasterMoves + {round(res.intercept, 2)}')

plot.show()
```
![Scatter plot of Average Player ELO vs number of Master moves featured for Bullet games](/assets/img/chess-analysis/BulletMasterMovesELO.jpeg)

When looking at the number of master moves played and player rating, the relationship is greatly diminished compared to the Blitz section. This confirms the trend in the prior regression. 

To a non-chess player this relationship might be very unexpected. If opening moves are typically memorized, why are players have trouble playing Book moves or Master moves? In the Discussion section, I will explore this finding more.

## Discussion

In the Analysis, I looked at relationship of moves played from an Opening Book and Master Games and player rating for Blitz and Bullet time formats. I verified that player ratings were representative and normally distributed, matching what I expected. Additionally, I verified that there was a downward trend of Book and Master moves featured past the limited set of first moves. 

In the Blitz regression analysis, a weak positive connection between the number of Book moves and rating was present. And a strong positive connection existed between the number of Master moves and rating. There are two possible ways to interpret this result. 1. Strong players can generally find the top moves that Masters play. 2. Strong players are using moves from a database of Master games to improve. There is probably a mix of both going here. Good moves are objectively good in perfect information game like Chess and players are looking at what others are doing to improve their game. 

In the Bullet regression analysis, a weak negative negative connection between the number of Book moves and rating was present. And a weak positive connection existed between the number of Master moves and rating. This was an unexpected result. Avid online chess players will tell you that Bullet Chess is a fundamentally different game than Blitz Chess. Many games are won or lost on time, not checkmate. This favors the player who can play faster, not better. To increase the amount of time your opponent consumes per move, players try to complicate the position and throw unusual moves at their opponent. 

In the recent [IM not a GM tournament](https://www.chess.com/article/view/2021-im-not-a-gm-speed-chess-championship), [International Master(IM) Levy Rozman recounts his opening preparation for the bullet section consisted of the unusual move 1.b3](https://youtu.be/C3QlcE55VUo?t=794), featured below. 

<img src='/assets/img/chess-analysis/board.jpeg' alt='Chessboard with 1. b3 played' style='width:50%;margin: auto; margin-top: 2rem;'>

In the [Chess.com Move Database](https://www.chess.com/explorer), 1.b3 is the 6th most common first move with 12,327 of 2,785,695 games or 0.44% of the games. IM Rozman argues his move was a tactic to confuse his opponent in the Bullet section. And it was probably the reason he won the match.

The lack of time means an opponent doesn’t have time to think about how a strange move might affect the position long term, they need to keep moving just to not lose on time. The data is revealing this common understanding of the time control. Players are playing sub-optimal moves designed to make their opponent think and put them into time trouble.

## Conclusion

Overall, I analyzed 20,000 Lichess Bullet and Blitz games to compare opening knowledge and player rating. In the Blitz section, my hypothesized positive relationship of Book and Master moves compared to player rating was found. In the Bullet section, my analysis found the opposite relationship with Book moves and a small positive relationship with Master moves. In the Discussion section, I brought in an analysis from professional Blitz and Bullet tournament player, IM Levy Rozman, to show how throwing odd moves at your opponent can cause them to burn time on their clock can lead to a winning advantage. For me, this whole project is good motivation to study the Master games from a Chess Book I recently picked up.

## Appendix

All resources used to create this dataset and analysis.

### Datasets
- [Lichess Games](https://database.lichess.org/#standard_games)
- [Master Games](https://rebel13.nl/download/data.html)
- [Opening Book](https://github.com/niklasf/eco)

### Master Game Index Builder

```python
import pickle
import chess.pgn


def main(pgn):
    move_idx = {}

    counter = 0
    while True:
        game = chess.pgn.read_game(pgn)
        if game is None:
            break
        counter += 1

        pos = move_idx
        for m in game.mainline_moves():
            m = m.uci()
            if m in pos:
                pos = pos[m]
            else:
                pos[m] = {}
                pos = pos[m]

        if counter == 200000:
            break

    with open('data/master_game_index.pickle', 'wb') as handle:
        pickle.dump(move_idx, handle)


if __name__ == '__main__':
    pgn = open('data/mb-3.45.pgn', encoding='ISO-8859-1')
    main(pgn)
```

### Dataset Builder

```python
import pickle
from typing import Dict

import chess.pgn
import chess.polyglot
from chess.pgn import Game
import pandas as pd


def get_book():
    a_eco = pd.read_csv('data/a.tsv', index_col='moves', delimiter='\t')
    b_eco = pd.read_csv('data/b.tsv', index_col='moves', delimiter='\t')
    c_eco = pd.read_csv('data/c.tsv', index_col='moves', delimiter='\t')
    d_eco = pd.read_csv('data/d.tsv', index_col='moves', delimiter='\t')
    e_eco = pd.read_csv('data/e.tsv', index_col='moves', delimiter='\t')

    return pd.concat([a_eco, b_eco, c_eco, d_eco, e_eco])


def get_master_move_index():
    index_file = open('data/master_game_index.pickle', 'rb')
    idx = pickle.load(index_file)
    index_file.close()

    return idx


def read_games():
    book = get_book()
    master_move_idx = get_master_move_index()
    counter = 0

    pgn = open('data/lichess_db_standard_rated_2017-04.pgn')

    games = []
    while True:
        offset = pgn.tell()
        headers = chess.pgn.read_headers(pgn)
        if headers is None:
            break

        if headers['Event'] != 'Rated Blitz game' and headers['Event'] != 'Rated Bullet game':
            chess.pgn.skip_game(pgn)
            continue
        if 'WhiteElo' not in headers or 'BlackElo' not in headers:
            chess.pgn.skip_game(pgn)
            continue
        if 'WhiteRatingDiff' not in headers or 'BlackRatingDiff' not in headers:
            chess.pgn.skip_game(pgn)
            continue

        pgn.seek(offset)
        game = chess.pgn.read_game(pgn)

        game = process_game(book, master_move_idx, game)
        if game is None:
            continue

        if counter == 20000:
            break

        games.append(game)
        counter += 1

    return games


def process_game(book: pd.DataFrame, master_move_idx: Dict[str, Dict], game: Game):
    opening = None
    moves = []

    moves_key = ''
    for m in game.mainline_moves():
        moves_key += m.uci()

        if moves_key in book.index:
            opening = book.loc[moves_key]['name']
            moves = moves_key
        else:
            break
        moves_key += ' '

    master_moves = 0
    pos = master_move_idx
    for m in game.mainline_moves():
        m = m.uci()
        if m in pos:
            master_moves += 1
            pos = pos[m]
        else:
            break

    if opening is None:
        print(f'Skipped: {game.headers["Opening"]}')
        return None

    return [
        game.headers['Site'],
        'Bullet' if game.headers['Event'] == 'Rated Bullet game' else 'Blitz',
        game.headers['White'],
        game.headers['WhiteElo'],
        game.headers['WhiteRatingDiff'],
        game.headers['Black'],
        game.headers['BlackElo'],
        game.headers['BlackRatingDiff'],
        game.headers['Result'],
        opening,
        game.headers['ECO'],
        game.headers['TimeControl'],
        len(moves.split(' ')),
        master_moves
    ]


if __name__ == '__main__':
    games = read_games()

    games = pd.DataFrame(games, columns=['ID', 'GameType', 'White', 'WhiteElo', 'WhiteRatingDiff', 'Black', 'BlackElo', 'BlackRatingDiff', 'Result', 'Opening', 'ECO', 'TimeControl', 'OpeningMoves', 'MasterMoves'])
    games = games.set_index('ID')
    games.to_csv('data/games.csv')

```

### Graphs

#### Blitz
- [Histogram of ELO with the White Pieces](/assets/img/chess-analysis/BlitzWhiteElo.jpeg)
- [Histogram of ELO with the Black Pieces](/assets/img/chess-analysis/BlitzBlackElo.jpeg)
- [Histogram of of the ELO Difference between the Players](/assets/img/chess-analysis/BlitzPlayerDifference.jpeg)
- [Bar graph of the number of games played grouped by the number of Book moves featured](/assets/img/chess-analysis/BlitzBookMoves.jpeg)
- [Bar graph of the number of games played grouped by the number of Master moves featured](/assets/img/chess-analysis/BlitzMasterMoves.jpeg)
- [Scatter plot of Average Player ELO vs number of Book moves featured](/assets/img/chess-analysis/BlitzBookMovesElo.jpeg)
- [Scatter plot of Average Player ELO vs number of Master moves featured](/assets/img/chess-analysis/BlitzMasterMovesElo.jpeg)

#### Bullet
- [Histogram of ELO with the White Pieces](/assets/img/chess-analysis/BulletWhiteElo.jpeg)
- [Histogram of ELO with the Black Pieces](/assets/img/chess-analysis/BulletBlackElo.jpeg)
- [Histogram of of the ELO Difference between the Players](/assets/img/chess-analysis/BulletPlayerDifference.jpeg)
- [Bar graph of the number of games played grouped by the number of Book moves featured](/assets/img/chess-analysis/BulletBookMoves.jpeg)
- [Bar graph of the number of games played grouped by the number of Master moves featured](/assets/img/chess-analysis/BulletMasterMoves.jpeg)
- [Scatter plot of Average Player ELO vs number of Book moves featured](/assets/img/chess-analysis/BulletBookMovesElo.jpeg)
- [Scatter plot of Average Player ELO vs number of Master moves featured](/assets/img/chess-analysis/BulletMasterMovesElo.jpeg)