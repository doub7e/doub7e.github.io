---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
bigimg: ["/img/cover_image_1.png", "/img/cover_image_2.png", "/img/cover_image_3.png"]
# cover-img: /img/cover_image_1.png
title: Political Stops
subtitle: Does Political Power Impact Racial Disparities in Police Stops?
---

**No one likes being puller over, but**
# Did you know...

The Stanford Open Policing Project has shwon us that African American in the US has been suffering racial disparities in traffic police stops across the country. We have been shown that black and Hispanic drivers are more likely to be stopped by police, and the bar for searching black and Hispanic drivers is lower than that for searching white drivers, suggestive of racial profiling. 

(For more details about this work, check out [their project website](https://openpolicing.stanford.edu/))

What their work has also informed us (by studying the legalization of recreational marijuana) is that policy interventions have the power to mitigate these racial disparities.

How can such policy interventions be made? We notice that ***political power*** is an important factor in it. ***___WHY?___***

In this project, we aim to analyze the political power of black people in ... states and try to identify the correlation between political power and the extent of racial disparities.

---


## Is Political Power a Reason for Racial Disparities?
Based on the Stanford Open Policing Project, we are here to ask, why Black Americans are treated unfairly by the police in the process of driving? One reason might be that the spotted unfair traffic stops are tarteted towards minority groups, who lack the political power to be heard. If minority groups have enough political power, they will be able to put pressure on police departments to deemphasize policing strategies that result in highly disparate patterns of search and arrest. Thus, we hypothesis that the existing racial disparities in traffic stop outcomes for black Americans are the result of lack of political power (note that we focus on just Black Americans in this project).

A group with high political power must be able to exercise certain amount of influence on the political procedures, therefore we identify ***population***, and ***voting population***, ***wealth*** and as ***education***  the latent variables linked to political power (supporting research:[[1]](https://doi.org/10.1016/j.jebo.2014.08.006), [[2]](https://www.sciencedirect.com/science/article/abs/pii/S0967067X0400008X), [[3]](https://www.jstor.org/stable/1050712?seq=1#metadata_info_tab_contents)). First of all, bureaucratic agencies are attuned to the publics they serve, thus groups with larger *population* have greater voice to express their demand, and are less likely to be ignored by officiers. Note that specially pick correlated varialables *population* and *voting population*, because we found that the voting turnout rate varies widely by race (see [here](https://www.pewresearch.org/2020/09/23/the-changing-racial-and-ethnic-composition-of-the-u-s-electorate/) for more details). What's more, a group with more *wealth* will be able to have more political contributions to protect their benefits. Finally, *education* level is a potential factor for political power without doubt.

In this project, we try to measure the political power quantitively through the aforementioned four aspects *population*, and *voting population*, *wealth* and as *education*. We describe the details in the following sections.


## Dataset and Preprocessing
Collecting dataset might be one of the most tiring parts in the project. Luckiy, all the dataset about policing stops are available at the [webpage](https://openpolicing.stanford.edu/) of Stanford Open Policing Project. Regarding to political power, we collect the data of *population* and *voting population* from [American Community Survey (ACS)](https://www.census.gov/en.html) database. It contained the result of elections of all states in US every two years (elections and midterm election). And we pick the data from 2010 to 2018. Besides, we collect dataset about *wealth* and *education* from [IPUMS USA](https://usa.ipums.org/usa/), which contains many samples of peoples' wealth and education situation in each year and each state.

Here are the details for data preprocessing: for *population* and *voting population*, we devide them by the number of total population in each state and get the percentage of population. For *wealth*, we first pick the median value of all samples in each state, then we devide them by the income of median white Americans in that state as normalization. For *education*, we use 0 and 1 to denote wheter one has attended college, then we average the data of all samples in one state. 

After preprocessing, we get the quatitive value of *population*, *voting population*, *wealth* and *education* for each year, each state and each race (black and white). Then we use **factor analysis** to construct a latent dimension of political power in a given community based on four varialables described above. **Factor analysis 的技术细节**。And this factor explains *79.07* % of the variance across the four variables.

Without surprise, we found the factor describing political power ranges from -1.21 to -0.22, with mean -0.96 and median -1.04 for black people, while for white people, it ranges from -0.67 to 1.35, with mean 0.96 and mediun 1.02. Indicating the huge superioiry of white people's political power agains black people's political power. In the following, we plot the political power of black and white Americans in 8 big states. Note that the range of y axis is different in two figures. We can see that white American keeps its superiority on political power from 2010 to 2018. One interesting phenomenon is that black people's political power reaches its top in 2012, which might account to the success of Obama in 2012' eletion.

<img src="figures/political_power.png" style="width: 1000px;" align="left"/>

## Explorative analysis

Here, we conducted a preliminary exploratory analysis using data from 15  American cities. These cities are CA San Diego, CA San Francisco, CA Stockton, CT Hartford, LA New Orleans, NC Charlotte, NC Durham, NC Fayetteville, NC Greensboro, NC Raleigh, NC Winston Salem, OH Columbus, PA Pittsburgh, TN Nashville,  VT Burlington. Since we need the data of search rate, warning rate citation rate, and arrest rate, these 15 ones are all the cities that meet the data requirements. What's more, the number of years with valid data varies by city. In summary, we use data from15 cities with 151 valid years. And all the data can be found at: https://openpolicing.stanford.edu/data/.

<center>Table: The description of four outcomes<center>

|       | bw_search | bw_arrest | bw_citation | bw_warning |
| :---: | :-------: | :-------: | :---------: | :--------: |
| count | 15.000000 | 15.000000 |  15.000000  | 15.000000  |
| mean  | 2.116278  | 1.651394  |  0.957276   |  1.205424  |
|  std  | 1.199010  | 1.005246  |  0.598655   |  0.658396  |
|  min  | 0.335821  | 0.130000  |  0.121225   |  0.085131  |
|  25%  | 1.308114  | 0.990718  |  0.589332   |  0.723890  |
|  50%  | 2.017767  | 1.676768  |  0.922837   |  1.195433  |
|  75%  | 3.092054  | 2.110031  |  1.144677   |  1.543879  |
|  max  | 4.367405  | 3.833067  |  2.341822   |  2.515497  |



For each outcome, we calculate the black-white ratio, As a reminder, if the calculated value is 1, then black and white drivers are seemed to be equally treated. Values below 1 indicate that white drivers are more possible to commit this outcome than black drivers, while values above 1 indicate that black drivers are more possible to commit this outcome than white drivers. Table 1 presents the summary statistics for these variables. 

Looking at the mean values, searches are 119 percent more common for black drivers than whites. Compared to the search rate, warnings and citations are almost equally likely. And arrests are 65 percent more likely among black drivers, on average.  The minima, 25th percentile value, median, 75th percentile value, and the maxima show the full range of each variable across the years. Searches have a maximum of more than 4 times likely among black drivers. While arrests have a maximum of about 3.8 times likely among black drivers. With a good range of variability for each variable, we test if our theory about political power can explain this variance.

## Regression Analysis

After the obtaining the political power, we explore the the influence of political power on the four outcomes, from the state level. Also from the Stanford Open Policing Project, we have 7 states that meet the data criteria, s.t. Arizona, Massachusetts, Montana, North Carolina, Rhode Island, Vermont, West virginia. And we values our hypothesis from 2010 to 2014. We conducted a regression analysis of political power of the above seven states regarding four outcomes, and the results are shown in the figure.

Figures shows the results of the regressions predicting the black-white outcome ratios. Following from our hypotheses, we expect that the coefﬁcients for our political power should push the predicted outcome to equality. For search rate ratios, warning rate ratios, and arrest rate ratios, this should be a negative coefﬁcient; while for citation rate ratios, this should be positive. And indeed we can find this result in most states.

![resultfigurebw_search](/Users/wangchenkai/Desktop/ADA/ADAP4/resultfigurebw_search.png)

<center>Figure: Search rates varying with political power</center>

![resultfigurebw_arrest](/Users/wangchenkai/Desktop/ADA/ADAP4/resultfigurebw_arrest.png)

<center>Figure: Arrest rates varying with political power</center>

![resultfigurebw_citation](/Users/wangchenkai/Desktop/ADA/ADAP4/resultfigurebw_citation.png)

<center>Figure: Citation rates varying with political power</center>

![resultfigurebw_warning](/Users/wangchenkai/Desktop/ADA/ADAP4/resultfigurebw_warning.png)

<center>Figure: Warning rates varying with political power</center>

Political power is strongly and signiﬁcantly related to three of the four outcomes reviewed, though its effect on arrest ratios does not reach statistical signiﬁcance. We can explore the impact of political power among black and white drivers by looking at simple plots. These figures show how the outcome rate ratio is expected to change across the political power variable. The regression line, which is the predicted value from the regression, is a colored solid line; and the 90 percent conﬁdence interval around the regression line is the shadowed part. Four ﬁgures are presented in identical format. These are the search ratio, arrest ratio, citation ratio, and warning ratio. On the x-axis is the black political power index and on the y-axis the relevant ratio.

## The Under-Representation of Minorities in Congress

test1
<iframe width="1000" height="500" frameborder="0" scrolling="no" src="//plotly.com/~doub7eli/1.embed"></iframe>

test2
<div>
    <a href="https://plotly.com/~doub7eli/1/?share_key=YxhXU3lXF61EOIBEMG5h8m" target="_blank" title="Plot 1" style="display: block; text-align: center;"><img src="https://plotly.com/~doub7eli/1.png?share_key=YxhXU3lXF61EOIBEMG5h8m" alt="Plot 1" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="doub7eli:1" sharekey-plotly="YxhXU3lXF61EOIBEMG5h8m" src="https://plotly.com/embed.js" async></script>
</div>


## ...
---