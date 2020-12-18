---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
bigimg: ["/img/cover_image_1.png", "/img/cover_image_2.png", "/img/cover_image_3.png"]
title: Political Stops
subtitle: Does Political Power Impact Racial Disparities in Police Stops?
---

**No one likes being pulled over, but**
# Did you know...

It has been shown that African American in the US has been suffering racial disparities in traffic police stops across the country. The Stanford Open Policing Project has demonstrated that black and Hispanic drivers are stopped by police at a higher rate without more evidence, and the bar for searching black and Hispanic drivers is lower than that for searching white drivers, suggestive of racial profiling. 

(For more details about this work, check out [their project website](https://openpolicing.stanford.edu/))

What their work has also informed us (by studying the legalization of recreational marijuana) is that policy interventions have the power to mitigate these racial disparities.

How can such policy interventions be made? We notice that ***political power*** is an important factor in it. Intuitively, with political power, disparities are less likely to grow because it would lead to attention, complaints, concern, and political actions to reduce them. Without political power, disparities can continue with impunity and with little relative attention.

In this project, we aim to analyze the political power of black people in ... states and try to figure out whether the political power has an impact on racial disparities in terms of police stops.

---

## How Do We Measure Political Power?
A group with high political power must be able to exercise certain amount of influence on the political procedures, therefore we identify **presence**, and **voice** as two latent variables linked to political power. Other two obvious linked factors are **wealth** (supporting research:[[1]](https://doi.org/10.1016/j.jebo.2014.08.006), [[2]](https://www.sciencedirect.com/science/article/abs/pii/S0967067X0400008X)) and **education** (supporting research: [[3]](https://www.jstor.org/stable/1050712?seq=1#metadata_info_tab_contents)).

More concretely, we use **proportion of population**, **proportion of voted population** to represent **presence** and **voice**. Indeed, as a group grows in size, it becomes harder to ignore, thus their political power grows. Presence without voice (voting) can be meaningless. We use **median personal income** and **proportion of sucessfully graduated from college** to represent **wealth** and **education**. Indeed, a group with more wealth is able to be more active in politics in order to defend their interests. And education is a highly relevant factor to both political activities and wealth. In the following figures, we demonstrate the first two variables of some states to let you have a clue how these variables change through years.

<iframe width="800" height="500" frameborder="0" scrolling="no" src="//plotly.com/~doub7eli/1.embed"></iframe>

### How Do We Build an Index for Political Power?

Data about policing stops are available at the [webpage](https://openpolicing.stanford.edu/) of Stanford Open Policing Project. In addition, we collect the data of *population* and *voted population* from [American Community Survey (ACS)](https://www.census.gov/en.html) database. It contained the result of elections of all states in US every two years (elections and midterm election). And we pick the data from 2010 to 2018. Besides, we collect dataset about **wealth** and **education** from [IPUMS USA](https://usa.ipums.org/usa/).

After appropriate pre-processing, we then use **Factor Analysis** to construct a single dimension of political power based on the four variables described above. The variance expalined is *79.07%*.

## How Has the Political Power Changed?

With the help of Factor Analysis, we calcuted the political power of both white and black people in multiple states over years.

<img src="figures/political_power.png" style="width: 1000px;" align="left"/>

Not surprisingly, we found the factor describing political power ranges from -1.21 to -0.22, with mean -0.96 and median -1.04 for black people, while for white people, it ranges from -0.67 to 1.35, with mean 0.96 and mediun 1.02. Indicating the huge superioiry of white people's political power over black people's political power. In the following, we plot the political power of black and white Americans in 8 big states. Note that the range of y axis is different in two figures. We can see that white American keeps its superiority on political power from 2010 to 2018.

## First Glance of the Analysis
One might assume that a group with greater political power will suffer from less raical dispairities in traffic stop, is that True? In the following, we plot the figure the white search rate and black search rate, with the size indicating the population of each state, and *the color indicating the difference between white's political power and black's political power*.

Clearly, we can see that the point with deeper color deviate more from the line of 'y=x', indicating that the phenomenon of racial disparity is more serious in the place where the difference between white's and black's political power is large. This is in line with our guess. And in the following, we will carry our regression analysis to get a clearer view.

<img src="figures/political_power.png" style="width: 600px;" align="left"/>


## Does Political Power Impact Racial Disparities in Police Stops?

We will test the correlation between political power and the following four outcomes to make a conclusion: a) search rate, b) warning rate c) citation rate, and d) arrest rate.




---