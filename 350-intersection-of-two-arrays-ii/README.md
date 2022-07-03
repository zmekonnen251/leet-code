<h2><a href="https://leetcode.com/problems/intersection-of-two-arrays-ii/">350. Intersection of Two Arrays II</a></h2><h3>Easy</h3><hr><div><p>Given two integer arrays <code>nums1</code> and <code><mark class="highlighted_selection" style="background-color: rgb(255, 255, 0); margin: 0px; padding: 0px; display: inline;">nums2</mark></code>, return <em>an array of their intersection</em>. Each element in the result must appear as many times as it shows in both arrays and you may return the result in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,2,2,1], <mark class="highlighted_selection" style="background-color: rgb(255, 255, 0); margin: 0px; padding: 0px; display: inline;">nums2</mark> = [2,2]
<strong>Output:</strong> [2,2]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums1 = [4,9,5], <mark class="highlighted_selection" style="background-color: rgb(255, 255, 0); margin: 0px; padding: 0px; display: inline;">nums2</mark> = [9,4,9,8,4]
<strong>Output:</strong> [4,9]
<strong>Explanation:</strong> [9,4] is also accepted.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, <mark class="highlighted_selection" style="background-color: rgb(255, 255, 0); margin: 0px; padding: 0px; display: inline;">nums2</mark>.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums1[i], <mark class="highlighted_selection" style="background-color: rgb(255, 255, 0); margin: 0px; padding: 0px; display: inline;">nums2</mark>[i] &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>What if the given array is already sorted? How would you optimize your algorithm?</li>
	<li>What if <code>nums1</code>'s size is small compared to <code><mark class="highlighted_selection" style="background-color: rgb(255, 255, 0); margin: 0px; padding: 0px; display: inline;">nums2</mark></code>'s size? Which algorithm is better?</li>
	<li>What if elements of <code><mark class="highlighted_selection" style="background-color: rgb(255, 255, 0); margin: 0px; padding: 0px; display: inline;">nums2</mark></code> are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?</li>
</ul>
</div>